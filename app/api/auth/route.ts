import { SignupSchema } from "@/app/secure/secure";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();

export default async function Signup (req:NextRequest){
    try{
        const body =req.json;
        const validData = SignupSchema.parse(body)
        if(!validData){
            return NextResponse.json({
                message:"Invalid data"
            },
        {status:400})
        }
        const {username , password , email } = validData;
        const existingUser = await prisma.user.findUnique({where:{email}});
        if(existingUser){
            return NextResponse.json({
                message:'User already exist'
            })
        }
        const hashedPass = await bcrypt.hash(password,10)
        const User = await prisma.user.create({
            data: { username , email, password }
        })
        if(!User ){
            return NextResponse.json({
                messgae:'Can not create the User  '
            },{status:400})
        }
        return NextResponse.json({
            message:"User created Successfully ",
        },{status:200})

    }catch{
        return NextResponse.json({
            message:'Internal Server Error '
        },{status:500})
    }
}