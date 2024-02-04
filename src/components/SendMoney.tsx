"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type Props = {};

function SendMoney({}: Props) {
  return (
    <Dialog>
      <DialogTrigger className="bg-blue-600 p-2 text-white rounded-md">
        Send Money
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Money</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Account Number
            </Label>
            <Input id="name" className="col-span-3" type="text" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Amount
            </Label>
            <Input id="username" className="col-span-3" type="number" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SendMoney;
