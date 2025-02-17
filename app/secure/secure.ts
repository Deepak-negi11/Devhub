import {z} from "zod";

export const  SignupSchema = z.object({
    username:z.string().min(4).max(50),
    password:z.string().min(7).max(50),
    email:z.string().email()
})


export const SigninSchema = z.object({
    email:z.string(),
    password:z.string().min(7).max(50)
})