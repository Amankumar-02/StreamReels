"use client";

import { SignIn } from "@clerk/nextjs"
import ClerkTemplate from "@/components/clerkTemplate";

function SignInRoute() {
  return (
    <ClerkTemplate Component={SignIn} />
  )
}

export default SignInRoute