import Login from '@/components/Login'
import React from 'react'
import { getServerSession } from "next-auth";
import { redirect, useRouter } from 'next/navigation';

const Page = async() => {
  const session=await getServerSession()
  if(session){
    redirect("/")
  }
  return (
    <>
    <Login/>
    </>
  )
}

export default Page