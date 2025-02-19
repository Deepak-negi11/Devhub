import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { SignupSchema } from "../../../secure/secure";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = SignupSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const { username, password, email } = parsed.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPass = await bcrypt.hash(password, 10);

    
    const user = await prisma.user.create({
      data: { username, email, password: hashedPass },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Cannot create the user" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Signup Error:", err);
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
