"use client";

import { UserProfile } from "@clerk/nextjs";
import ClerkTemplate from "@/components/clerkTemplate";

function Page() {
  return (
    // <h1>Profile</h1>
    <ClerkTemplate Component={UserProfile} />
  );
}

export default Page;
