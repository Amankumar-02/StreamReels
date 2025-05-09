// // components/reels/reel-scroller.tsx
// "use client";

// import { useRef } from "react";
// import { ArrowDown, ArrowUp } from "lucide-react";
// import ReelCard from "./reel-card";
// import type { Prisma } from "@prisma/client";

// type Reel = Prisma.ReelsGetPayload<{
//     include: {
//       user: {
//         select: {
//           name: true;
//           email: true;
//         };
//       };
//     };
//   }>;

// type Props = {
//   reels: any[]
// };

// export default function ReelScroller({ reels }: Props) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const scrollTo = (direction: "up" | "down") => {
//     const container = containerRef.current;
//     if (!container) return;

//     const cards = Array.from(container.querySelectorAll(".reel-card"));
//     const viewportHeight = window.innerHeight;

//     // const scrollTop = container.scrollTop;
//     const currentIndex = cards.findIndex((card) => {
//       const rect = card.getBoundingClientRect();
//       return rect.top >= 0 && rect.top < viewportHeight;
//     });

//     const nextIndex =
//       direction === "down"
//         ? Math.min(cards.length - 1, currentIndex + 1)
//         : Math.max(0, currentIndex - 1);

//     const targetCard = cards[nextIndex] as HTMLElement;
//     if (targetCard) {
//       targetCard.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="relative overflow-y-scroll scrollbar-hidden scroll-smooth snap-y snap-mandatory"
//       style={{ height: "calc(100vh - 96px)" }}
//     >
//       <div className="flex flex-col items-center">
//         {reels.map((reel) => (
//           <div
//             key={reel.id}
//             className="snap-start flex justify-center items-center reel-card"
//           >
//             <ReelCard reel={reel} />
//           </div>
//         ))}
//       </div>
//       <div className="fixed top-1/2 right-10 -translate-y-1/2 hidden sm:flex flex-col gap-4 z-10">
//         <button
//           onClick={() => scrollTo("up")}
//           className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer"
//         >
//           <ArrowUp className="w-6 h-6" />
//         </button>
//         <button
//           onClick={() => scrollTo("down")}
//           className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer"
//         >
//           <ArrowDown className="w-6 h-6" />
//         </button>
//       </div>
//     </div>
//   );
// }

// // "use client";

// // import { useRef } from "react";
// // import ReelCard from "./reel-card";

// // type Props = {
// //   reels: any[];
// // };

// // export default function ReelScroller({ reels }: Props) {
// //   const containerRef2 = useRef<HTMLDivElement>(null);

// //   return (
// //     <div
// //       ref={containerRef2}
// //       className="relative overflow-y-scroll scrollbar-hidden scroll-smooth snap-y snap-mandatory"
// //       style={{ height: "calc(100vh - 96px)" }}
// //     >
// //       <div className="flex flex-col items-center">
// //         {reels.map((reel, index) => (
// //           <div
// //             key={reel.id}
// //             className="snap-start flex justify-center items-center reel-card relative"
// //           >
// //             <ReelCard
// //               reel={reel}
// //               containerRef2={containerRef2}
// //               index={index}
// //               total={reels.length}
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

"use client";

import { useTheme } from "next-themes";
import { useRef } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import ReelCard from "./reel-card";
import type { Prisma } from "@prisma/client";

type Reel = Prisma.ReelsGetPayload<{
  include: {
    user: {
      select: {
        name: true;
        email: true;
      };
    };
  };
}>;

type Props = {
  reels: Reel[];
};

export default function ReelScroller({ reels }: Props) {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (direction: "up" | "down") => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".reel-card"));
    const viewportHeight = window.innerHeight;

    const currentIndex = cards.findIndex((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top >= 0 && rect.top < viewportHeight;
    });

    const nextIndex =
      direction === "down"
        ? Math.min(cards.length - 1, currentIndex + 1)
        : Math.max(0, currentIndex - 1);

    const targetCard = cards[nextIndex] as HTMLElement;
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-y-scroll scrollbar-hidden scroll-smooth snap-y snap-mandatory"
      style={{ height: "calc(100vh - 96px)" }}
    >
      <div className="flex flex-col items-center">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="snap-start flex justify-center items-center reel-card"
          >
            <ReelCard reel={reel} />
          </div>
        ))}
      </div>
      {/* <div className="fixed top-1/2 right-10 -translate-y-1/2 hidden sm:flex flex-col gap-8 z-10">
        <button
          onClick={() => scrollTo("up")}
          className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer"
        >
          <ArrowUp className="w-8 h-8" />
        </button>
        <button
          onClick={() => scrollTo("down")}
          className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div> */}
      <div className="fixed top-1/2 right-10 -translate-y-1/2 hidden sm:flex flex-col gap-8 z-10">
        <div className="relative group">
          <button
            onClick={() => scrollTo("up")}
            className={`${resolvedTheme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-gray-500 text-white hover:bg-gray-400"} p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer`}
          >
            <ArrowUp className="w-8 h-8" />
          </button>
          <p className={`absolute right-full top-1/2 -translate-y-1/2 mr-4 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${resolvedTheme === "dark" ? "bg-white text-black" : "bg-gray-500 text-white"} font-bold w-[100px] text-center leading-8`}>
            Previous Reel
          </p>
        </div>

        <div className="relative group">
          <button
            onClick={() => scrollTo("down")}
            className={`${resolvedTheme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-gray-500 text-white hover:bg-gray-400"} p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer`}
          >
            <ArrowDown className="w-8 h-8" />
          </button>
          <p className={`absolute right-full top-1/2 -translate-y-1/2 mr-4 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${resolvedTheme === "dark" ? "bg-white text-black" : "bg-gray-500 text-white"} font-bold w-[100px] text-center leading-8`}>
            Next Reel
          </p>
        </div>
      </div>
    </div>
  );
}
