"use client";

import { UserProfile } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

function Profile() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="container mx-auto flex items-center justify-center my-10">
      <UserProfile
        appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}
      />
    </div>
  );
}

export default Profile;
