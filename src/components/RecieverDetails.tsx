import React from "react";
import { getUserById } from "@/lib/data";
type Props = {
  recieverID: string;
};

async function RecieverDetails({ recieverID }: Props) {
  const recieverInfo = await getUserById(recieverID);
  return (
    <div className="flex flex-col">
      <h6 className="font-semibold">{recieverInfo?.accountNumber}</h6>
      <div className="flex gap-3">
        <h6 className="text-sm text-gray-400">
          {recieverInfo?.username.toUpperCase()}
        </h6>
        <h6 className="text-sm text-gray-400">{recieverInfo?.email}</h6>
      </div>
    </div>
  );
}

export default RecieverDetails;
