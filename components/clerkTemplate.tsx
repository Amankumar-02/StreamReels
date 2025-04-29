// 'use client'

// import { useTheme } from "next-themes";
// import { dark } from "@clerk/themes";

// function ClerkTemplate({ Component }: { Component: React.ElementType }) {
//     const { resolvedTheme } = useTheme();
//   return (
//     <div className="container mx-auto flex items-center justify-center my-6">
//           <Component
//             appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}
//           />
//         </div>
//   )
// };

// export default ClerkTemplate;

import React from 'react'

function ClerkTemplate() {
  return (
    <div>ClerkTemplate</div>
  )
}

export default ClerkTemplate