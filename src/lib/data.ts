import { db } from "@/lib/db";
import { handleError } from "./utils";

// Get user by EmailID
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    return null;
  }
};

// Get user by ID
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};

// Get user by account
export const getUserByAccountNumber = async (accountNumber: string) => {
  try {
    const user = await db.user.findUnique({ where: { accountNumber } });
    return user;
  } catch {
    return null;
  }
};

// Get all users
export const getUsers = async () => {
  try {
    const users = await db.user.findMany({});
    return users;
  } catch (error) {
    return null;
  }
};

// Get all user transactions
export const getUserTxs = async (userId: string) => {
  try {
    const userTransactions = await db.transaction.findMany({
      where: {
        OR: [{ senderId: userId }, { recieverId: userId }],
      },
      // orderBy:{
      //   createdAt:"asc"
      // }
    });
    return userTransactions
  } catch (error) {
    return null;
  }
};
