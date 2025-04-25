// Here we are using ImageKit to get the authentication parameters for uploading images
// to the ImageKit server. The authentication parameters are used to authenticate the user

import ImageKit from "imagekit"
import { NextResponse } from "next/server";

if (
  !process.env.NEXT_PUBLIC_IMAGEKITIO ||
  !process.env.NEXT_PRIVATE_IMAGEKITIO ||
  !process.env.NEXT_PUBLIC_IMAGEKITIO_URL_ENDPOINT
) {
  throw new Error("ImageKit environment variables are not properly set.");
}

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKITIO!,
  privateKey: process.env.NEXT_PRIVATE_IMAGEKITIO!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKITIO_URL_ENDPOINT!,
});

export async function GET(request:Request) {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}