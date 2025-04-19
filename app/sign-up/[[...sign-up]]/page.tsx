"use client";

import { SignUp } from "@clerk/nextjs"
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

function SignUpRoute() {
  const { resolvedTheme } = useTheme(); // Get current theme (light/dark/system resolved)

  return (
    <div className="container mx-auto flex items-center justify-center my-10">
    <SignUp appearance={{baseTheme: resolvedTheme === "dark" ? dark : undefined}} />
    </div>
  )
}

export default SignUpRoute