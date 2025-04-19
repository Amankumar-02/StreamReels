"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user, isSignedIn, isLoaded } = useUser();
  return (
    <>
    <Button className="mx-5">Hello World</Button>
    <h1>Home Page</h1>
    {isSignedIn && <p>Welcome, {user.username}!</p>}
    </>
  );
}
