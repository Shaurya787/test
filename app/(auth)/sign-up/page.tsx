"use client";

import {
  TAuthCredentialValidator,
  authCredentialValidator,
} from "@/lib/validators/account-credential-validator";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, getProviders } from "next-auth/react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialValidator>({
    resolver: zodResolver(authCredentialValidator),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const [mounted, setMounted] = useState(false)
useEffect(()=>{setMounted(true)},[])
if(!mounted)return null


  const onSubmit = ({
    email,
    password,
    username,
  }: TAuthCredentialValidator) => {
    signIn("github")
  };
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-10">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="h-20 w-20" />
          <h1 className="text-2xl font-bold">Create an account</h1>
          <Link
            href="/sign-in"
            className={buttonVariants({
              variant: "link",
              className: "gap-1.5",
            })}
          >
            Already have an account?Sign-in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="password">UserName</Label>
                <Input
                  type="username"
                  {...register("username")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.username,
                  })}
                  placeholder="Username"
                />
                {errors?.username && (
                  <p className="text-sm text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                  placeholder="tom@gmail.com"
                />
                {errors?.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  {...register("password")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                  placeholder="password"
                />
                {errors?.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button>Sign up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
