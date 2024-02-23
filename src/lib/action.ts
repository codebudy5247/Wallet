"use server";
import { revalidatePath } from 'next/cache'
import { db } from "@/lib/db";
import { handleError } from "@/lib/utils";

// Send Money
export async function sendMoney(
  senderAccountBalance: number,
  recieverAccountBalance: number,
  txPayload: createTx
) {
  // TODO: Wrap it inside transaction
  try {
    if (!txPayload.recieverId) throw new Error("Reciever not found");

    // Deduct amn from sender account
    if (senderAccountBalance < txPayload.amount)
      throw new Error("Insufficient balance!");

    let senderUpdatedBalance = senderAccountBalance - txPayload.amount;
    await db.user.update({
      where: {
        id: txPayload.senderId,
      },
      data: {
        accountBalance: senderUpdatedBalance,
      },
    });
    // Add balance to reciever account
    let recieverUpdatedBalance = recieverAccountBalance + txPayload.amount;
    await db.user.update({
      where: {
        id: txPayload.recieverId,
      },
      data: {
        accountBalance: recieverUpdatedBalance,
      },
    });
    // Create new tx
    const newTx = await db.transaction.create({
      data: {
        type: txPayload.type,
        message: txPayload.message,
        amount: txPayload.amount,
        recieverAccountNumber: txPayload.recieverAccountNumber,
        senderId: txPayload.senderId,
        recieverId: txPayload.recieverId,
      },
    });
    revalidatePath('/')
    return JSON.parse(JSON.stringify(newTx));
  } catch (error) {
    handleError(error);
  }
}
