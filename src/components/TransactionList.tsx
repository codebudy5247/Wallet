import React from "react";
import { Separator } from "./ui/separator";

const TransactionList = () => {
  return (
    <div className="p-5 rounded-xl shadow-lg h-[80vh]">
      <h6 className="font-bold text-xl">Transactions</h6>
      <Separator className="my-4" />
    </div>
  );
};

export default TransactionList;
