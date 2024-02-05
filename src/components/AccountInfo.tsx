import React from "react";
import { Separator } from "@/components/ui/separator";

type Props = {
  user: User;
};

function AccountInfo({ user }: Props) {
  return (
    <div className="p-5 rounded-xl shadow-lg">
      <h6 className="font-bold text-xl">Account Details</h6>
      <Separator className="my-4" />

      <div className="flex flex-col gap-2">
        <h6 className="font-semibold text-gray-400">
          {user?.username?.toUpperCase()}
        </h6>
        <h6 className="font-semibold text-gray-400">{user?.accountNumber}</h6>
        <h6 className="font-semibold text-gray-400">{user?.email}</h6>
      </div>
    </div>
  );
}

export default AccountInfo;
