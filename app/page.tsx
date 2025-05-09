import Hero from "@/components/hero";
import ReelScroller from "@/components/reels/reel-scroller";
// import ReelCard from "@/components/reels/reel-card";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
// import { ArrowDown, ArrowUp } from "lucide-react";

export default async function Home() {
  const user = await currentUser();
  // console.log(user?.imageUrl, user?.hasImage, user?.lastSignInAt)

  if (!user) return <Hero />;

  const loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        name: user.username || user.fullName || "Name",
        email: user.emailAddresses[0].emailAddress,
        clerkUserId: user.id,
      },
    });
    console.log("New user created");
  }

  // const reels = await prisma.reels.findMany({
  //   where: { userId: loggedInUser?.id },
  //   include: {
  //     user: {
  //       select: {
  //         name: true,
  //         email: true,
  //       },
  //     },
  //   },
  //   orderBy:{
  //     createdAt:'desc'
  //   }
  // });
  const reels = await prisma.reels.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
    <ReelScroller reels={reels} />
      {/* <div
        className="overflow-y-scroll scrollbar-hidden scroll-smooth snap-y snap-mandatory"
        style={{ height: "calc(100vh - 96px)" }}
      >
        <div className="flex flex-col items-center">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="snap-start flex justify-center items-center"
            >
              <ReelCard reel={reel} />
            </div>
          ))}
        </div> */}
        {/* <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden sm:flex flex-col gap-4 z-10">
          <button className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer">
            <ArrowUp className="w-6 h-6" />
          </button>
          <button className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer">
            <ArrowDown className="w-6 h-6" />
          </button>
        </div> */}
      {/* </div> */}
    </>
  );
}