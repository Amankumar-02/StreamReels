// "use client";

// import type { Prisma } from "@prisma/client";
// // import React from "react";
// // import type { Prisma } from "@/lib/generated/prisma";
// import React, { useRef, useEffect } from "react";
// import { Card, CardFooter } from "../ui/card";
// // import { ImageKitProvider, IKVideo } from "imagekitio-next";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// // const urlEndPoint = process.env.NEXT_PUBLIC_IMAGEKITIO_URL_ENDPOINT as string;
// // console.log("url end point -> ", urlEndPoint);

// type ReelCardProps = {
//   reel: Prisma.ReelsGetPayload<{
//     include: {
//       user: {
//         select: {
//           name: true;
//           email: true;
//         };
//       };
//     };
//   }>;
// };

// const ReelCard: React.FC<ReelCardProps> = ({ reel }) => {
//   console.log(reel);
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.volume = 0.5;
//     }
//   }, []);

//   return (
//     <Card
//       className="p-0 w-[360px] flex flex-col items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
//       style={{ height: "calc(100vh - 56px)" }}
//     >
//       {/* ImageKitIo Video Component */}
//       {/* <ImageKitProvider urlEndpoint={urlEndPoint}>
//         <IKVideo
//           path={reel.reelUrl.replace(urlEndPoint, "")}
//           // transformation={[{ height: "640", width: "360", format: "mp4" }]}
//           controls
//           autoPlay={false}
//           // disablePictureInPicture
//           // controlsList="nodownload nofullscreen noremoteplayback"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//       </ImageKitProvider> */}
//       {/* Raw Component */}
//       <div className="relative w-[360px] rounded-2xl overflow-hidden bg-black shadow-lg"  style={{height: "calc(100vh - 56px)"}}>
//           <video
//             ref={videoRef}
//             src={reel.reelUrl}
//             className="w-full h-full object-cover"
//             // autoPlay
//             loop
//             // muted
//             playsInline
//             controls
//             disablePictureInPicture
//             controlsList="nodownload nofullscreen noremoteplayback"
//             onContextMenu={(e) => e.preventDefault()}
//           />

//           {/* <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
//             <h2 className="text-lg font-semibold mb-1">{reel.title}</h2>
//             <p className="text-sm">{reel.description}</p>
//             <span className="text-sm mt-2 block font-medium text-gray-300">
//               @{reel.user.name}
//             </span>
//           </div> */}
//           </div>

//       {/* Channel Information  */}
//       <CardFooter className="absolute bottom-20 left-0 text-white bg-[#00000085] py-2 w-full">
//         <div>
//           <div className="flex items-center space-x-2">
//             <Avatar>
//               <AvatarImage src="" alt="channel owner photo" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             <div className="flex flex-col">
//               <h3 className="font-semibold">{reel.title}</h3>
//               <span className="text-sm">{reel.user.name}</span>
//             </div>
//           </div>

//           <div className="text-sm mt-2">
//             <p>{reel.description}</p>
//           </div>
//           <div className="text-sm mt-2">
//             <p>{reel.hashtags}</p>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// };

// export default ReelCard;

// "use client";

// import type { Prisma } from "@prisma/client";
// import React, { useRef, useEffect, useState } from "react";
// import { Card, CardFooter } from "../ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { Volume2, VolumeX } from "lucide-react";

// type ReelCardProps = {
//   reel: Prisma.ReelsGetPayload<{
//     include: {
//       user: {
//         select: {
//           name: true;
//           email: true;
//         };
//       };
//     };
//   }>;
// };

// const ReelCard: React.FC<ReelCardProps> = ({ reel }) => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [isMuted, setIsMuted] = useState(true);
//   const [volume, setVolume] = useState(0.5);

//   // Scroll observer for autoplay & pause
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && videoRef.current) {
//           videoRef.current.play();
//         } else if (videoRef.current) {
//           videoRef.current.pause();
//         }
//       },
//       {
//         threshold: 0.75,
//       }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = isMuted;
//       videoRef.current.volume = volume;
//     }
//   }, [isMuted, volume]);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (videoRef.current.paused) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   };

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//   };

//   return (
//     <Card
//       ref={containerRef}
//       className="p-0 w-[360px] flex flex-col items-center justify-center overflow-hidden shadow-lg transition-shadow duration-300 relative snap-start"
//       style={{ height: "calc(100vh - 56px)" }}
//     >
//       <div
//         className="relative w-[360px] bg-black shadow-lg rounded-2xl overflow-hidden"
//         style={{ height: "calc(100vh - 56px)" }}
//         onClick={togglePlay}
//       >
//         <video
//           ref={videoRef}
//           src={reel.reelUrl}
//           className="w-full h-full object-cover"
//           loop
//           playsInline
//           disablePictureInPicture
//           controls={false}
//           controlsList="nodownload nofullscreen noremoteplayback"
//           onContextMenu={(e) => e.preventDefault()}
//         />
//         {/* Volume Control UI */}
//         <div className="absolute top-4 right-4 flex items-center gap-2 z-10 bg-black/40 px-2 py-1 rounded-lg">
//           <button onClick={(e) => { e.stopPropagation(); toggleMute(); }}>
//             {isMuted ? (
//               <VolumeX className="text-white" />
//             ) : (
//               <Volume2 className="text-white" />
//             )}
//           </button>
//           {!isMuted && (
//             <input
//               type="range"
//               min={0}
//               max={1}
//               step={0.01}
//               value={volume}
//               onChange={(e) => setVolume(parseFloat(e.target.value))}
//               className="w-20"
//               onClick={(e) => e.stopPropagation()}
//             />
//           )}
//         </div>
//       </div>

//       {/* Footer Info */}
//       <CardFooter className="absolute bottom-20 left-0 text-white bg-[#00000085] py-2 w-full">
//         <div>
//           <div className="flex items-center space-x-2">
//             <Avatar>
//               <AvatarImage src="" alt="channel owner photo" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             <div className="flex flex-col">
//               <h3 className="font-semibold">{reel.title}</h3>
//               <span className="text-sm">{reel.user.name}</span>
//             </div>
//           </div>
//           <div className="text-sm mt-2">{reel.description}</div>
//           <div className="text-sm mt-2">{reel.hashtags}</div>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// };

// export default ReelCard;

"use client";

import { useVolume } from "@/app/context/mediaControlContext";
import type { Prisma } from "@prisma/client";
import React, { useRef, useEffect, useState } from "react";
import { Card, CardFooter } from "../ui/card";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { Volume2, VolumeX, Play, Pause, ArrowUp, ArrowDown } from "lucide-react";
import { Volume2, VolumeX, Play, Pause, Fullscreen } from "lucide-react";

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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { isMuted, setIsMuted, volume, setVolume } = useVolume();
  // const [isMuted, setIsMuted] = useState(false);
  // const [volume, setVolume] = useState(0.5);
  const [showPlayPauseIcon, setShowPlayPauseIcon] = useState<
    "play" | "pause" | null
  >(null);
  const [iconTimer, setIconTimer] = useState<true | false>(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Scroll observer for autoplay & pause
  useEffect(() => {
    const node = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
          setShowPlayPauseIcon("play");
        } else if (videoRef.current) {
          videoRef.current.pause();
          setShowPlayPauseIcon("pause");
        }
      },
      {
        threshold: 0.75,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume;
    }
  }, [isMuted, volume]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  //   const togglePlay = () => {
  //     if (videoRef.current) {
  //       if (videoRef.current.paused) {
  //         videoRef.current.play();
  //       } else {
  //         videoRef.current.pause();
  //       }
  //     }
  //   };

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIconTimer(true);
      setShowPlayPauseIcon("play");
    } else {
      videoRef.current.pause();
      setIconTimer(true);
      setShowPlayPauseIcon("pause");
    }

    // setTimeout(() => setShowPlayPauseIcon(null), 500);
    setTimeout(() => setIconTimer(false), 300);
  };

  // const toggleMute = () => {
  //   setIsMuted((prev) => !prev);
  // }
  const toggleMute = (): void => {
    setIsMuted(!isMuted);
  };

  return (
    <Card
      ref={containerRef}
      className="p-0 w-[360px] sm:w-[340px] flex flex-col items-center justify-center overflow-hidden shadow-lg transition-shadow duration-300 relative snap-start"
      style={{ height: "calc(100vh - 96px)" }}
    >
      <div
        className="relative w-[360px] sm:w-[340px] bg-black shadow-lg rounded-2xl overflow-hidden"
        style={{ height: "calc(100vh - 96px)" }}
        // onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={reel.reelUrl}
          className={`w-full h-full ${
            isFullscreen ? "object-contain bg-black" : "object-cover"
          } transition-all`}
          loop
          playsInline
          disablePictureInPicture
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          onClick={togglePlayPause}
        />

        {/* Center Play/Pause Indicator */}
        {iconTimer && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-black bg-opacity-50 p-4 rounded-full text-white animate-ping-once">
              {showPlayPauseIcon === "play" ? (
                <Play className="w-8 h-8" />
              ) : (
                <Pause className="w-8 h-8" />
              )}
            </div>
          </div>
        )}

        <div className="absolute top-4 left-[2%] flex items-center gap-2 z-10 bg-black/40 px-2 py-1 rounded-lg opacity-75 sm:opacity-40 hover:opacity-100 transition-all">
          {showPlayPauseIcon === "play" ? (
            <Pause className="text-white" onClick={togglePlayPause} />
          ) : (
            <Play className="text-white" onClick={togglePlayPause} />
          )}
        </div>
        {/* Volume Control UI */}
        <div className="absolute top-4 right-[16%] flex items-center gap-2 z-10 bg-black/40 px-2 py-1 rounded-lg opacity-75 sm:opacity-40 hover:opacity-100 transition-all">
          <button
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
          >
            {isMuted ? (
              <VolumeX className="text-white" />
            ) : (
              <Volume2 className="text-white" />
            )}
          </button>
          {!isMuted && (
            // <input
            //   type="range"
            //   min={0}
            //   max={1}
            //   step={0.01}
            //   value={volume}
            //   onChange={(e) => setVolume(parseFloat(e.target.value))}
            //   className="w-46"
            //   onClick={(e) => e.stopPropagation()}
            // />
            <Slider
              value={[volume * 100]}
              onValueChange={(val) => setVolume(val[0] / 100)}
              min={0}
              max={100}
              step={1}
              className="w-46"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
        <div className="absolute top-4 right-[2%] flex items-center gap-2 z-10 bg-black/40 px-2 py-1 rounded-lg opacity-75 sm:opacity-40 hover:opacity-100 transition-all">
          {/* <Fullscreen/> */}
          <Fullscreen
            className="text-white cursor-pointer"
            // onClick={(e) => {
            //   e.stopPropagation();
            //   if (videoRef.current) {
            //     if (videoRef.current.requestFullscreen) {
            //       videoRef.current.requestFullscreen();
            //     } else if ((videoRef.current as any).webkitRequestFullscreen) {
            //       (videoRef.current as any).webkitRequestFullscreen(); // Safari
            //     } else if ((videoRef.current as any).msRequestFullscreen) {
            //       (videoRef.current as any).msRequestFullscreen(); // IE11
            //     }
            //   }
            // }}
            onClick={(e) => {
              e.stopPropagation();
              if (videoRef.current) {
                if (videoRef.current.requestFullscreen) {
                  videoRef.current.requestFullscreen();
                } else if ((videoRef.current as HTMLVideoElement & {
                  webkitRequestFullscreen?: () => void;
                  msRequestFullscreen?: () => void;
                }).webkitRequestFullscreen) {
                  (videoRef.current as HTMLVideoElement & {
                    webkitRequestFullscreen?: () => void;
                  }).webkitRequestFullscreen?.();
                } else if ((videoRef.current as HTMLVideoElement & {
                  msRequestFullscreen?: () => void;
                }).msRequestFullscreen) {
                  (videoRef.current as HTMLVideoElement & {
                    msRequestFullscreen?: () => void;
                  }).msRequestFullscreen?.();
                }
              }
            }}

          />
        </div>
      </div>

      {/* Footer Info */}
      <CardFooter className="absolute bottom-0 left-0 text-white bg-[#00000085] py-4 w-full shadow-[0_0_10px_black]">
        <div>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="" alt="channel owner photo" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="">@{reel.user.name}</span>
            </div>
          </div>
          <h3 className="font-semibold my-1">{reel.title}</h3>
          <div className="text-sm">
            {reel.description}{" "}
            <span className="font-semibold">{reel.hashtags}</span>
          </div>
        </div>
      </CardFooter>

      {/* Scroll Navigation Buttons */}
      {/* <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden sm:flex flex-col gap-4 z-10">
          <button className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer">
            <ArrowUp className="w-6 h-6" />
          </button>
          <button className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer">
            <ArrowDown className="w-6 h-6" />
          </button>
        </div> */}
    </Card>
  );
};

export default ReelCard;
