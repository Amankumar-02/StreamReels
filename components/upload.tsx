"use client";

import { useState } from "react";
import { Progress } from "./ui/progress";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type UploadProps = {
  setReelUrl: (url: string) => void;
};

export default function Upload({ setReelUrl }: UploadProps) {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploadProgress(0);
      setError(null);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/cloudinary-upload");

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(progress);
        }
      };

      xhr.onload = () => {
        const res = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
          setReelUrl(res.secure_url);
          setUploadProgress(100);
        } else {
          setError(res.error || "Upload failed");
          setUploadProgress(null);
        }
      };

      xhr.send(formData);
    } catch (err) {
      console.log(err);
      setError("Upload failed. Try again.");
      setUploadProgress(null);
    }
  };

  return (
    <div>
      <Label>Upload File</Label>
      <Input type="file" className="mt-1" accept="video/*" onChange={handleFileChange}/>
      {uploadProgress !== null && (
        <Progress value={uploadProgress} className="mt-2" />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}




// // This upload component is responsible for handling file uploads to ImageKit and return url
// // using the ImageKit SDK. It provides a user interface for selecting files, validating file types and sizes, and displaying upload progress.
// // It also handles authentication with ImageKit's API. 

// // "use client" is required in Next.js 13+ when using client-side components
// "use client";

// import React, { useState } from "react";
// import { ImageKitProvider, IKUpload } from "imagekitio-next";
// import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
// import { Progress } from "./ui/progress";

// // Get public key and URL endpoint from environment variables
// const publicKey = process.env.NEXT_PUBLIC_IMAGEKITIO;
// const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKITIO_URL_ENDPOINT;

// // Authenticator function required by ImageKit to securely upload files
// const authenticator = async () => {
//   try {
//     // const response = await fetch("http://localhost:3000/api/imagekit-auth");
//     const response = await fetch("https://streamreels.vercel.app/api/imagekit-auth");

//     // Check for failed request
//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(
//         `Request failed with status ${response.status}: ${errorText}`
//       );
//     }

//     // Extract required authentication values
//     const data = await response.json();
//     const { signature, expire, token } = data;
//     return { signature, expire, token };
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       throw new Error(`Authentication request failed: ${error.message}`);
//     }
//     throw error;
//   }
// };

// // Define props expected by the Upload component
// type UploadProps = {
//     setReelUrl: (url: string) => void;
// };
// type UploadError = {
//   message: string;
//   [key: string]: unknown;
// };

// // Upload component responsible for rendering file upload UI
// export default function Upload({ setReelUrl }: UploadProps) {
//   const [uploadProgress, setUploadProgress] = useState<number | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   // Callback when upload fails
//   const onError = (err: UploadError) => {
//     console.log("OnError", err);
//     setError(err.message);

//     setUploadProgress(null);
//   };

//   // Callback when upload succeeds
//   const onSuccess = (res: IKUploadResponse) => {
//     console.log("Success", res);
//     setReelUrl(res.url);
//     setUploadProgress(100);
//     setError(null);
//   };

//   // Callback for updating progress while uploading
//   const onUploadProgress = (evt: ProgressEvent<XMLHttpRequestEventTarget>) => {
//     if (evt.lengthComputable) {
//       const progress = Math.round((evt.loaded / evt.total) * 100);
//       setUploadProgress(progress);
//     }
//   };

//   // Callback when upload starts
//   const onUploadStart = () => {
//     setUploadProgress(0);
//     setError(null);
//   };

//   return (
//     <ImageKitProvider
//       publicKey={publicKey}
//       urlEndpoint={urlEndpoint}
//       authenticator={authenticator}
//     >
//       <p>Upload File</p>
//       <IKUpload
//         useUniqueFileName={true}
//         // validateFile={(file) => file.size < 20 * 1024 * 1024}
//         validateFile={(file) => {
//             const validTypes = ["video/mp4"];
//             const isValidSize = file.size < 20 * 1024 * 1024; // 20MB
//             const isValidType = validTypes.includes(file.type);
//             // return isValidSize && isValidType;
//             if (!isValidSize || !isValidType) {
//                 // Manually set error state because onError won't be triggered here
//                 setError("Only .mp4, .mkv, or .avi files under 20MB are allowed.");
//                 return false;
//               }
//               return true;
//         }}
//         folder={"/stream-reels"}
//         onError={onError}
//         onSuccess={onSuccess}
//         onUploadProgress={onUploadProgress}
//         onUploadStart={onUploadStart}
//         // className="mt-1 block w-full text-sm tex-gray-900 file:mr-4 file:px-4 file:py-2 file:rounded-md"
//         className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 cursor-pointer"
//       />

//       {/* Show progress bar only when upload is in progress  */}
//       {uploadProgress !== null && (
//         <div className="mt-4">
//           <Progress value={uploadProgress} className="h-2" />
//         </div>
//       )}

//       {/* Show error message if upload fails  */}
//       {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//     </ImageKitProvider>
//   );
// }
