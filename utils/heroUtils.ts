"use client";

import { ChartConfig } from "@/components/ui/chart";

export const testimonials = [
    {
      name: "Aarav Sharma",
      quote:
        "StreamReels has transformed how I share short videos. It's sleek and super intuitive!",
      title: "Content Creator",
    },
    {
      name: "Neha Patel",
      quote:
        "Love the dark mode and fast uploads. StreamReels is now my go-to for reels.",
      title: "Travel Vlogger",
    },
    {
      name: "Rahul Mehta",
      quote:
        "The community here is amazing. I gained followers and feedback quickly.",
      title: "Music Producer",
    },
    {
      name: "Priya Desai",
      quote:
        "Simple UI with powerful tools. Creating content has never been easier.",
      title: "Fashion Influencer",
    },
    {
      name: "Karan Joshi",
      quote:
        "StreamReels makes sharing moments fun and fast. The upload speed is incredible!",
      title: "Fitness Coach",
    },
  ];
  export const engagementData = [
    {
      month: "January-February",
      users: 120,
      posts: 90,
      likes: 300,
      comments: 150,
      shares: 70,
    },
    {
      month: "March-April",
      users: 200,
      posts: 140,
      likes: 400,
      comments: 180,
      shares: 90,
    },
    {
      month: "May-June",
      users: 260,
      posts: 180,
      likes: 450,
      comments: 220,
      shares: 120,
    },
    {
      month: "July-August",
      users: 300,
      posts: 220,
      likes: 500,
      comments: 260,
      shares: 150,
    },
    {
      month: "September-October",
      users: 280,
      posts: 200,
      likes: 470,
      comments: 240,
      shares: 130,
    },
    {
      month: "November-December",
      users: 320,
      posts: 240,
      likes: 550,
      comments: 300,
      shares: 160,
    },
  ];

  export const chartConfig = {
    users: { label: "Users" },
    posts: { label: "Posts" },
    likes: { label: "Likes" },
    comments: { label: "Comments" },
    shares: { label: "Shares" },
  } satisfies ChartConfig;

 export const partners = [
    { name: "Next.js", logo: "/nextjs2.png", isInverted: false },
    { name: "TypeScript", logo: "/typescript.png", isInverted: false },
    { name: "ShadCn", logo: "/shadcn.png", isInverted: true },
    { name: "Clerk", logo: "/clerk.png", isInverted: false },
    { name: "Prisma", logo: "/prisma.png", isInverted: true },
    { name: "Neon DB", logo: "/neon-db.png", isInverted: false },
    { name: "Tailwind", logo: "/tailwind.png", isInverted: false },
    { name: "Cloudinary", logo: "/cloudinary.png", isInverted: false },
    { name: "Vercel", logo: "/vercel2.png", isInverted: true },
    { name: "Zod", logo: "/zod.png", isInverted: false },
  ];