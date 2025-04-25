import ReelsCard from "@/components/reelsCard/reels-card";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
// import { Button } from "@/components/ui/button";

export default async function Home() {
  const user = await currentUser();
  // console.log(user?.imageUrl, user?.hasImage, user?.lastSignInAt)
  // console.log(user)
  if(!user){
    return null;
  }

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

  const reels = await prisma.reels.findMany({
    where: { userId: loggedInUser?.id },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy:{
      createdAt:'desc'
    }
  });

  return (
    <>
    <div className="overflow-y-scroll scrollbar-hidden scroll-smooth snap-y snap-mandatory" style={{height: "calc(100vh - 56px)"}}>
      {/* shorts container  */}
      <div className="flex flex-col items-center">
        {reels.map((reel) => (
          <div key={reel.id} className="snap-start flex justify-center items-center">
            <ReelsCard reel={reel} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
