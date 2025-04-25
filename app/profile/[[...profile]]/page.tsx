"use client";

import { UserProfile } from "@clerk/nextjs";
import ClerkTemplate from "@/components/clerkTemplate";

function ProfileRoute() {
  return (
    <ClerkTemplate Component={UserProfile} />
  );
}

export default ProfileRoute;
