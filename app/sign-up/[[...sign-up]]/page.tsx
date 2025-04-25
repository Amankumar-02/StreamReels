"use client";

import { SignUp } from "@clerk/nextjs"
import ClerkTemplate from "@/components/clerkTemplate";

function SignUpRoute() {
  return (
    <ClerkTemplate Component={SignUp} />
  )
}

export default SignUpRoute