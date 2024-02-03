import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateAccountNumber } from "@/lib/utils";
import * as z from "zod";

const UserSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password, username } = UserSchema.parse(body);
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { success: false, message: "User with this email already exists" },
        { status: 409 }
      );
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const uniqueAccountNumber = generateAccountNumber();
    const newUser = await db.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        accountNumber: uniqueAccountNumber,
        accountBalance:0
      },
    });
    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      {
        user: rest,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
