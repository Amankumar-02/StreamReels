// "use client";

// import React from "react";
// // import { useState } from "react";
// import { useTheme } from "next-themes";
// import { UploadReelSchema } from "@/schemas/uploadReelSchema";
// import { FormInput } from "@/components/formInput";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form } from "@/components/ui/form";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// // import { uploadReelsAction } from "@/actions/upload-reel";

// function UploadRoute() {
//   // const [avatar, setAvatar] = useState<string>("/thumbnail.png");
//   const { resolvedTheme } = useTheme();
//   const form = useForm<z.infer<typeof UploadReelSchema>>({
//     defaultValues: {
//       title: "",
//       description: "",
//       reel: "",
//       hashtags: "",
//     },
//     resolver: zodResolver(UploadReelSchema),
//   });
//   function onSubmit(values: z.infer<typeof UploadReelSchema>) {
//     console.log(values);
//     // setAvatar(values.media)
//   }
// //   const [formState, action, isPending] = useActionState(uploadReelsAction, { errors: {},});
// //   const [reelUrl, setReelUrl] = useState<string>("");
// //   const handleSubmit = (formData: FormData)=>{
// //     formData.append("reel", reelUrl);
// //     return action(formData);
// //   }
// //   console.log(formState);

//   return (
//     <>
//       <div className="lg:max-w-[80%] mx-auto p-6">
//         <h1 className="text-3xl text-center font-bold">Upload Reels</h1>
//         <div className="mt-4 border border-grey-300 rounded-lg p-4">
//           <Avatar className="m-auto mb-8 h-25 w-25">
//             <AvatarImage src="/thumbnail.png" className={resolvedTheme === "dark" ? "bg-gray-300 object-contain" : "bg-gray-700 object-contain"}/>
//             <AvatarFallback>CN</AvatarFallback>
//           </Avatar>

//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             {/* <form action={handleSubmit} className="space-y-8"> */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <FormInput
//                   componentProps={{
//                     form,
//                     label: "Title",
//                     name: "title",
//                     placeholder: "Title",
//                     type: "text",
//                     description: "This is your public display title.",
//                   }}
//                 />
//                 <FormInput
//                   componentProps={{
//                     form,
//                     label: "Description",
//                     name: "description",
//                     placeholder: "Description",
//                     type: "text",
//                     description: "This is your public display description.",
//                   }}
//                 />
//                 <FormInput
//                   componentProps={{
//                     form,
//                     label: "Upload Reel",
//                     name: "reel",
//                     placeholder: "",
//                     type: "file",
//                     description: "Provide the media file for the reel.",
//                   }}
//                 />
//                 <FormInput
//                   componentProps={{
//                     form,
//                     label: "#HashTags",
//                     name: "hashtags",
//                     placeholder: "#fun #travel",
//                     type: "text",
//                     description: "Use hashtags starting with #",
//                   }}
//                 />
//               </div>
//               <div className="flex justify-center items-center gap-4">
//                 <Button className="cursor-pointer">Cancel Upload</Button>
//                 <Button type="submit" className="cursor-pointer">
//                   Upload Reel
//                 </Button>
//               </div>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UploadRoute;


import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page