import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateAccountNumber } from "@/lib/utils";


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password, username } = body;
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
        password:hashedPassword,
        accountNumber: uniqueAccountNumber,
      },
    });
    return NextResponse.json(
      {
        user: newUser,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
