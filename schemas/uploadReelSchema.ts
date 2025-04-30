// Form Creation Structure
// 1. react-hook-form ==> usForm
// 2. shadcn-Form ==> Form Components
// 3. zod ==> z, zodResolver

// setup
// 1. Create Schema ==> link with useForm and set the defaultValues
// 2. ShadCn-Form ==> Form==>FormField
// 3. inside FormField ==> FormItem ==> (FormLabel ==> FormControl ==> (Input) ==> FormDescription ==> FormMessage)

import { z } from "zod";

export const UploadReelSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters.",
    })
    .max(50, {
      message: "Title must be at most 50 characters.",
    }),
  description: z
    .string()
    .min(5, {
      message: "Description must be at least 5 characters.",
    })
    .max(200, {
      message: "Description must not exceed 200 characters.",
    }),
  hashtags: z
    .string()
    // .regex(/^#[\w]+(?:\s*#[\w]+)*$/, "Enter valid hashtags starting with #")
    .refine((val) => val === "" || /^#[\w]+(?:\s*#[\w]+)*$/.test(val), 
    { message: "Enter valid hashtags starting with #", }),
  reel: z
      .string(),
    // .min(4, { message: "HashTag must be at least 3 characters.",}),
  //   thumbnail: z
  //     .string()
  //     .min(4, {
  //       message: "HashTags must be at least 2 characters.",
  //     })
  //     .max(200, {
  //       message: "HashTags must not exceed 100 characters.",
  //     }),
    // .refine((file) => file?.length === 1, "Media file is required."),
  // location: z
  // .string()
  // .min(4, {
  //   message: "HashTags must be at least 2 characters.",
  // })
  // .max(200, {
  //   message: "HashTags must not exceed 100 characters.",
  // }),
  // visibility : z
  // z.boolean()
  // .default(true),
  // allowComments: z
  // .string()
  // .min(4, {
  //   message: "HashTags must be at least 2 characters.",
  // })
  // .max(200, {
  //   message: "HashTags must not exceed 100 characters.",
  // }),
  // allowDownloads: z
  // .string()
  // .min(4, {
  //   message: "HashTags must be at least 2 characters.",
  // })
  // .max(200, {
  //   message: "HashTags must not exceed 100 characters.",
  // }),
  // tagPeople: z
  // .string()
  // .min(4, {
  //   message: "HashTags must be at least 2 characters.",
  // })
  // .max(200, {
  //   message: "HashTags must not exceed 100 characters.",
  // }),
});
