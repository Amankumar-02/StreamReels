"use client";

import { SignIn } from "@clerk/nextjs"
import ClerkTemplate from "@/components/clerkTemplate";

function Page() {
  return (
    // <h1>Sign-in</h1>
    <ClerkTemplate Component={SignIn} />
  )
}

export default Page