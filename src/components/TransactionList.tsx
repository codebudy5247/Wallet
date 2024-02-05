import React from "react";
import { Separator } from "./ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { MoveUpRight } from "lucide-react";
import { MoveDownLeft } from "lucide-react";

type Props = {
  userId: string;
  transactions: Transaction[];
};

const TransactionList = ({ userId, transactions }: Props) => {
  return (
    <div className="p-5 rounded-xl shadow-lg h-[73vh]">
      <h6 className="font-bold text-xl">Transactions</h6>
      <Separator className="my-4" />

      <div>
        <Table>
          <TableCaption>A list of your recent transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              {/* <TableHead className="w-[100px]">Type</TableHead> */}
              <TableHead>Message</TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions &&
              transactions.map((tx, i) => (
                <TableRow key={i}>
                  {/* <TableCell className="font-medium">
                    {userId === tx.senderId ? (
                      <h6 className="text-red-500 font-semibold">Send</h6>
                    ) : (
                      <h6 className="text-green-500 font-semibold">Recieve</h6>
                    )}
                  </TableCell> */}
                  <TableCell className="font-medium">{tx.message}</TableCell>
                  <TableCell className="font-medium">
                    {tx.recieverAccountNumber}
                  </TableCell>
                  <TableCell className="font-medium">
                    {userId === tx.senderId ? (
                      <div className="flex gap-2 items-center">
                        <MoveUpRight size={15} color="red" />
                        <h6 className="text-red-500 font-semibold">
                          ₹{tx.amount}
                        </h6>
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <MoveDownLeft size={15} color="green" />
                        <h6 className="text-green-500 font-semibold">
                          ₹{tx.amount}
                        </h6>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionList;
