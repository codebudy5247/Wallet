"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { sendMoney } from "@/lib/action";

type Props = {
  sender: User;
  recieverList: User[];
};

const SendMoneyFormSchema = z.object({
  accountNumber: z.string().min(1, "Account Number is required"),
  amount: z.coerce
    .number()
    .int("Amount must be an integer")
    .refine((value) => value >= 1, {
      message: "Amount must be greater than or equal to 1",
    }),
  description: z.string().optional(),
});

function SendMoney({ sender, recieverList }: Props) {
  const form = useForm<z.infer<typeof SendMoneyFormSchema>>({
    resolver: zodResolver(SendMoneyFormSchema),
    defaultValues: {
      accountNumber: "",
      amount: 0,
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SendMoneyFormSchema>) => {
    const reciever = recieverList.filter(
      (obj) => obj.accountNumber === values.accountNumber
    );
    try {
      const payloadData: createTx = {
        type: "",
        message: values.description!,
        amount: values.amount,
        recieverAccountNumber: reciever[0].accountNumber,
        senderId: sender.id,
        recieverId: reciever[0].id,
      };
      const send_money = await sendMoney(
        sender.accountBalance,
        reciever[0].accountBalance,
        payloadData
      );
      console.log(send_money);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-blue-600 p-2 text-white rounded-md">
        Send Money
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Send Money</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="space-y-2 mb-5">
              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Number</FormLabel>
                    <FormControl>
                      <Input placeholder="A396572743A396572743" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="optional..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Send</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default SendMoney;
