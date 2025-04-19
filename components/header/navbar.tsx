"use client";
import {
  // SignInButton,
  // SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ModeToggle } from "../mode-toggle";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { dark, shadesOfPurple } from "@clerk/themes";

function NavBar() {
  const router = useRouter();
  const { user, isSignedIn, isLoaded } = useUser();
  const { resolvedTheme } = useTheme();
  return (
    <>
      <div className="flex items-center justify-between gap-2 h-14">
        <div>
          {/* Logo Text */}
          <h1
            className="font-bold text-xl"
            onClick={() => {
              router.push("/");
            }}
          >Stream<span className="text-red-500">Reels</span>
          </h1>
        </div>
        {/* Search Input Field */}
        <div className="lg:w-1/2">
          <Input type="text" placeholder="Search..." />
        </div>
        {/* Account Management */}
        <div className="flex items-center space-x-2">
          {/* All media */}
          <Button>
            <Plus />
            Create
          </Button>
          {/* Auth Management */}
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              {/* <SignInButton><Button>Sign In</Button></SignInButton> */}
              {/* <SignUpButton><Button>Sign Up</Button></SignUpButton> */}
              <Button
                onClick={() => {
                  router.push("/sign-in");
                }}
              >
                Sign In
              </Button>
              <Button
                onClick={() => {
                  router.push("/sign-up");
                }}
              >
                Sign Up
              </Button>
            </SignedOut>
            <SignedIn>
              <Button className="hidden lg:block">
                {isSignedIn && <p>Welcome, {user.username}!</p>}
              </Button>
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
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

export default NavBar;
