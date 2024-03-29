import SignUp from '@/components/SignUp'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'


const Page = async() => {
  const session=await getServerSession()
  if(session){
    redirect("/")
  }
  return (
    <>
    <SignUp/>
    </>
  )
}

export default Page