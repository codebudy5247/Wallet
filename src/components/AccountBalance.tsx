import React from "react";
import { Separator } from "@/components/ui/separator";
import SendMoney from "./SendMoney";

type Props = {
  accountBalance: number;
};

function AccountBalance({ accountBalance }: Props) {
  return (
    <div className="p-5 rounded-xl shadow-lg">
      <h6 className="font-bold text-xl">Current Balance</h6>
      <Separator className="my-4" />

      <div className="flex gap-2">
        <h6 className="font-extrabold text-5xl text-center">
          ₹{accountBalance}
        </h6>
        <span className="text-gray-400 mt-5">Available</span>
      </div>

      <div className="flex gap-2 mt-6">
        <SendMoney />
      </div>
    </div>
  );
}

export default AccountBalance;
