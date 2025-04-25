"use client";

import React, { useActionState } from "react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { uploadReelsAction } from "@/actions/upload-reel";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Upload from "@/components/upload";
import { Loader2 } from "lucide-react";
// import { UploadReelSchema } from "@/schemas/uploadReelSchema";
// import { FormInput } from "@/components/formInput";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form } from "@/components/ui/form";

function UploadRoute() {
  const [avatar, setAvatar] = useState<string>("/thumbnail.png");
  const { resolvedTheme } = useTheme();
  // const form = useForm<z.infer<typeof UploadReelSchema>>({
  //   defaultValues: {
  //     title: "",
  //     description: "",
  //     reel: "",
  //     hashtags: "",
  //   },
  //   resolver: zodResolver(UploadReelSchema),
  // });
  // function onSubmit(values: z.infer<typeof UploadReelSchema>) {
  //   console.log(values);
  //   // setAvatar(values.media)
  // }
  const [formState, action, isPending] = useActionState(uploadReelsAction, {
    errors: {},
  });
  const [reelUrl, setReelUrl] = useState<string>("");
  const handleSubmit = (formData: FormData) => {
    formData.append("reel", reelUrl);
    return action(formData);
  };
  console.log(formState);

  return (
    <>
      <div className="lg:max-w-[80%] mx-auto p-6">
        <h1 className="text-3xl text-center font-bold">Upload Reels</h1>
        <div className="mt-4 border border-grey-300 rounded-lg p-4">
          {/* Thumbnail */}
          <Avatar className="m-auto mb-8 h-25 w-25">
            <AvatarImage
              src={avatar}
              className={
                resolvedTheme === "dark"
                  ? "bg-gray-300 object-contain"
                  : "bg-gray-700 object-contain"
              }
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* Form */}
          <form action={handleSubmit}>
            {/* Title */}
            <div className="mb-4">
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Title"
                className="mt-1"
              />
              {formState.errors.title && (
                <span className="text-red-500 text-sm">
                  {formState.errors.title}
                </span>
              )}
            </div>
            {/* Description */}
            <div className="mb-4">
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                placeholder="Description"
                className="mt-1"
              />
              {formState.errors.description && (
                <span className="text-red-500 text-sm">
                  {formState.errors.description}
                </span>
              )}
            </div>
            {/* Hashtags */}
            <div className="mb-4">
              <Label>#HashTag</Label>
              <Input
                type="text"
                name="hashtags"
                placeholder="#fun #reels"
                className="mt-1"
              />
              {formState.errors.hashtags && (
                <span className="text-red-500 text-sm">
                  {formState.errors.hashtags}
                </span>
              )}
            </div>
            {/* UploadReel */}
            <div className="mb-4">
              <Upload setReelUrl={setReelUrl} />
              {formState.errors.reel && (
                <span className="text-red-500 text-sm">
                  {formState.errors.reel}
                </span>
              )}
            </div>
            {/* Server Error */}
            {formState.errors.formError && (
              <div className="border border-red-500 bg-red-100">
                <p className="text-red-600">{formState.errors.formError}</p>
              </div>
            )}
            {/* Submit Button */}
            <Button type="submit" className="w-full">
              {isPending ? <Loader2 className="animate-spin h-4 w-4" /> : "Upload"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadRoute;
