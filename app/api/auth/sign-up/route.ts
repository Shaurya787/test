import { NextResponse } from "next/server"
import {hash} from "bcrypt"
import {sql} from "@vercel/postgres"

export async function POST(req:Request){

    try {
        const {username,email,password}=await req.json()
        console.log({username,email,password})

        const hashedPassword=await hash(password,10);
        const res=await sql`
        INSERT INTO users (username,email,password)
        VALUES (${username}, ${email},${hashedPassword} )
        `
        
    } catch (error) {
        console.log("SING_UP_ROUTE_ERROR",error)
    }
    return NextResponse.json({message:"success"})
}