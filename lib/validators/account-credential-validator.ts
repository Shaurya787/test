import { z } from "zod";

export const authCredentialValidator=z.object({
    username:z.string().min(2,{
        message:"Username must be at least 2 characters"
    }),
    email:z.string().email(),
    password:z.string().min(6,{
        message:"Password must be at least 6 characters"
    })
})

export type TAuthCredentialValidator=z.infer<typeof authCredentialValidator>