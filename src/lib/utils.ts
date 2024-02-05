import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAccountNumber() {
  const startingChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

  const randomDigits = Math.floor(Math.random() * 1000000000)
    .toString()
    .padStart(9, "0");

  const accountNumber = (startingChar + randomDigits).repeat(2);

  return accountNumber.slice(0, 20);
}

export const handleError = (error: unknown) => {
  console.error(error)
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}
