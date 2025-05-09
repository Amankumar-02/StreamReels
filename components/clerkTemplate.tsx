"use client";

import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { useEffect, useState } from "react";

function ClerkTemplate({ Component }: { Component: React.ElementType }) {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // This ensures the theme is correctly resolved (next-themes only works after mount)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container mx-auto flex items-center justify-center py-6" style={{ minHeight: "calc(100vh - 96px)" }}>
      {!isMounted || !resolvedTheme ? (
          <div className="h-[90vh] w-full max-w-md animate-pulse rounded-lg bg-muted" />
      ) : (
          <Component
            appearance={{
              baseTheme: resolvedTheme === "dark" ? dark : undefined,
            }}
          />
      )}
    </div>
  );
}

export default ClerkTemplate;

// import React from 'react'

// function ClerkTemplate() {
//   return (
//     <div>ClerkTemplate</div>
//   )
// }

// export default ClerkTemplate
