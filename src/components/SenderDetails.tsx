import React from "react";
import { getUserById } from "@/lib/data";
type Props = {
  senderID: string;
};

async function SenderDetails({ senderID }: Props) {
  const senderInfo = await getUserById(senderID);
  console.log(senderInfo, "senderInfo");

  return (
    <div className="flex flex-col">
      <h6 className="font-semibold">{senderInfo?.accountNumber}</h6>
      <div className="flex gap-3">
        <h6 className="text-sm text-gray-400">{senderInfo?.username.toUpperCase()}</h6>
        <h6 className="text-sm text-gray-400">{senderInfo?.email}</h6>
      </div>
    </div>
  );
}

export default SenderDetails;
