"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, Search } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import {
  // SignInButton,
  // SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
// import { dark, shadesOfPurple } from "@clerk/themes";

function NavBar() {
  // const router = useRouter();
  const { user, isSignedIn } = useUser();
  // const { user, isSignedIn, isLoaded } = useUser();
  const { resolvedTheme } = useTheme();
  return (
    <>
      <div className="flex items-center justify-between gap-2 h-14 px-4 lg:px-0">
        <div>
          {/* Logo Text */}
          <Link href="/">
            <h1 className="font-bold text-xl md:text-3xl cursor-pointer" >
              Stream<span className="text-red-500">Reels</span>
            </h1>
          </Link>
        </div>

        {/* Search Input Field */}
        <div className="hidden sm:block lg:w-1/2">
          <Input type="text" placeholder="Search..." />
        </div>
        <div className="hidden sm:hidden border py-1 px-2 rounded-md">
          <Search className="text-gray-500" />
          {/* <Input type="text" placeholder="Search..." /> */}
        </div>

        {/* Account Management */}
        <div className="flex items-center lg:space-x-2">
          {/* Auth Management */}
          <header className="flex justify-end items-center p-2 lg:p-4 gap-2 lg:gap-4 h-16">
            <SignedOut>
              {/* <SignInButton><Button>Sign In</Button></SignInButton> */}
              {/* <SignUpButton><Button>Sign Up</Button></SignUpButton> */}
              <Link href="/sign-in">
              <Button
                className="cursor-pointer"
                >
                Sign In
              </Button>
              </Link>
              <Link href="/sign-up">
              <Button
                className="cursor-pointer"
                >
                Sign Up
              </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              {/* All media */}
              <Link href="/upload"> 
              <Button className="cursor-pointer" ><Plus /> Create</Button>
              </Link>
              <h2 className="hidden lg:block text-sm">
                {isSignedIn && (
                  <>
                    {`Welcome `}
                    <span className="font-semibold">{user.username}</span>
                  </>
                )}
              </h2>
              <UserButton
                appearance={{
                  baseTheme: resolvedTheme === "dark" ? dark : undefined,
                }}
                userProfileMode="navigation" // Instead of modal
                userProfileUrl="/profile"
              />
            </SignedIn>
          </header>
          {/* Theme Toggle */}
          <ModeToggle/>
        </div>
      </div>
    </>
  );
}

export default NavBar;
