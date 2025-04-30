"use client";

import type { Prisma } from "@prisma/client";
// import React from "react";
// import type { Prisma } from "@/lib/generated/prisma";
import React, { useRef, useEffect } from "react";
import { Card, CardFooter } from "../ui/card";
// import { ImageKitProvider, IKVideo } from "imagekitio-next";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// const urlEndPoint = process.env.NEXT_PUBLIC_IMAGEKITIO_URL_ENDPOINT as string;
// console.log("url end point -> ", urlEndPoint);

type ReelCardProps = {
  reel: Prisma.ReelsGetPayload<{
    include: {
      user: {
        select: {
          name: true;
          email: true;
        };
      };
    };
  }>;
};

const ReelCard: React.FC<ReelCardProps> = ({ reel }) => {
  console.log(reel);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, []);

  return (
    <Card
      className="p-0 w-[360px] flex flex-col items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
      style={{ height: "calc(100vh - 56px)" }}
    >
      {/* ImageKitIo Video Component */}
      {/* <ImageKitProvider urlEndpoint={urlEndPoint}>
        <IKVideo
          path={reel.reelUrl.replace(urlEndPoint, "")}
          // transformation={[{ height: "640", width: "360", format: "mp4" }]}
          controls
          autoPlay={false}
          // disablePictureInPicture
          // controlsList="nodownload nofullscreen noremoteplayback"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </ImageKitProvider> */}
      {/* Raw Component */}
      <div className="relative w-[360px] rounded-2xl overflow-hidden bg-black shadow-lg"  style={{height: "calc(100vh - 56px)"}}>
          <video
            ref={videoRef}
            src={reel.reelUrl}
            className="w-full h-full object-cover"
            // autoPlay
            loop
            // muted
            playsInline
            controls
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h2 className="text-lg font-semibold mb-1">{reel.title}</h2>
            <p className="text-sm">{reel.description}</p>
            <span className="text-sm mt-2 block font-medium text-gray-300">
              @{reel.user.name}
            </span>
          </div> */}
          </div>

      {/* Channel Information  */}
      <CardFooter className="absolute bottom-20 left-0 text-white bg-[#00000085] py-2 w-full">
        <div>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="" alt="channel owner photo" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h3 className="font-semibold">{reel.title}</h3>
              <span className="text-sm">{reel.user.name}</span>
            </div>
          </div>

          <div className="text-sm mt-2">
            <p>{reel.description}</p>
          </div>
          <div className="text-sm mt-2">
            <p>{reel.hashtags}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReelCard;
