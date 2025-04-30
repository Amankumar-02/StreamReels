"use server"

import { prisma } from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { UploadReelSchema } from "@/schemas/uploadReelSchema";
// import { z } from 'zod'

// const uploadReelsSchema = z.object({
//     title: z.string().min(3, { message: "Title must be at least 3 characters." }),
//     description: z.string().min(5, { message: "Description must be at least 5 characters." }),
//     reel: z.string(),
// })

type UploadReelsState = {
    errors: {
        title?: string[];
        description?: string[],
        hashtags?: string[],
        reel?: string[],
        formError?: string[],
    }
}

export const uploadReelsAction = async (prevState: UploadReelsState, formData: FormData) : Promise<UploadReelsState> => {
    const result = UploadReelSchema.safeParse({
    // const result = uploadReelSchema.safeParse({
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        hashtags: formData.get("hashtags") as string,
        reel: formData.get("reel") as string,
    });
    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors };
    }

    //  clerk authentication
    const { userId } = await auth();
    console.log("user id -> ", userId);
    
    if (!userId) {
        return {
            errors: {
                formError: ["Please login first to create a reel"]
            }
        }
    }
    console.log("working...");
    
    const user = await prisma.user.findUnique({
        where: { clerkUserId: userId }
    });

    try {
        if (!user?.id) {
            return {
                errors: {
                    formError: ["User not found"]
                }
            }
        }

        await prisma.reels.create({
            data: {
                title: result.data.title,
                description: result.data.description,
                hashtags: result.data.hashtags,
                reelUrl: result.data.reel,
                userId: user.id
            }
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                errors: {
                    formError: [error.message]
                }
            }
        } else {
            return {
                errors: {
                    formError: ["Some internal server error please try again."]
                }
            }
        }
    }
    revalidatePath("/");
    redirect("/");


}