"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import {testimonials, engagementData, chartConfig, partners} from "@/utils/heroUtils";
import { Flame, HeartPulse, Upload } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
//   ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import Image from "next/image";

function Hero() {
  const { resolvedTheme } = useTheme();

  return (
    <>
    {/* hero */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 py-16 bg-background gap-10">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Discover. Create. Share <br /> Your Favorite{" "}
            <span className="text-primary">Reels</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            StreamReels lets you explore trending short videos, upload your own
            content, and engage with a vibrant creator community. All in one
            sleek platform.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/sign-up">
              <Button>Get Started</Button>
            </Link>
            <Link href="/sign-in">
              <Button variant="outline">Explore Reels</Button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* <img
            src="/reels-showcase3.png"
            alt=""
            // className={`${resolvedTheme === "dark" ? "invert" : null} w-full`}
            className="w-full"
          /> */}
          <Image src="/reels-showcase3.png" alt="Reels Showcase" width={1200} height={800} className="w-full"/>
        </div>
      </section>
      {/* features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-8 py-16 bg-background">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center px-4">
          <Upload className="text-primary mb-4" size="2.5rem" />
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
            Upload Reels
          </h2>
          <p className="text-muted-foreground max-w-xs">
            Share your moments with the world. Upload your own reels
            effortlessly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center px-4">
          <Flame className="text-primary mb-4" size="2.5rem" />
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
            Go Viral
          </h2>
          <p className="text-muted-foreground max-w-xs">
            Discover trending content and let your creativity reach thousands.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center px-4">
          <HeartPulse className="text-primary mb-4" size="2.5rem" />
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
            Connect & React
          </h2>
          <p className="text-muted-foreground max-w-xs">
            Engage with creators and fans alike. Like, comment, and share your
            favorites.
          </p>
        </div>
      </section>
      {/* graph */}
      <section className="px-4 md:px-8 py-16 bg-background">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          User Engagement Overview
        </h2>
        <ChartContainer
          config={chartConfig}
          className="min-h-[300px] w-full overflow-x-auto"
        >
          <BarChart data={engagementData} barCategoryGap="10%">
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="users" fill="#3b82f6" radius={4} name="Users" />
            <Bar dataKey="posts" fill="#10b981" radius={4} name="Posts" />
            <Bar dataKey="likes" fill="#f59e0b" radius={4} name="Likes" />
            <Bar dataKey="comments" fill="#ef4444" radius={4} name="Comments" />
            <Bar dataKey="shares" fill="#8b5cf6" radius={4} name="Shares" />
          </BarChart>
        </ChartContainer>
      </section>
      {/* users */}
      <section className="px-4 md:px-8 py-16 bg-background">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          What Our Users Say
        </h2>

        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem
                key={idx}
                className="md:basis-1/2 lg:basis-1/3 px-2"
              >
                <div className="bg-background rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                  <div className="flex flex-col items-center mb-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h4 className="text-lg font-semibold text-foreground">
                      {t.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{t.title}</p>
                  </div>
                  <p className="text-muted-foreground text-center">
                    {`"${t.quote}"`}
                    {/* &ldquo;{t.quote}&rdquo; */}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      {/* faq */}
      <section className="px-4 md:px-8 py-16 bg-background">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          Got Questions About StreamReels?
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is StreamReels?</AccordionTrigger>
            <AccordionContent>
              StreamReels is a modern short video-sharing platform where users
              can discover, upload, and engage with reels in a smooth,
              responsive interface synced with light/dark themes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Can I upload my own reels?</AccordionTrigger>
            <AccordionContent>
              Yes! You can easily upload your own short videos. We support
              videos under 50MB and ensure a seamless uploading experience via
              Cloudinary.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Do I need to create an account?</AccordionTrigger>
            <AccordionContent>
              You can explore public reels without an account, but uploading and
              interacting with content (like, comment) requires signing up via
              our secure Clerk-based authentication system.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is StreamReels mobile friendly?</AccordionTrigger>
            <AccordionContent>
              Absolutely. The platform is built with a mobile-first approach
              using Tailwind CSS and offers a fully responsive, app-like
              experience on all devices.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How is content moderated?</AccordionTrigger>
            <AccordionContent>
              We aim to foster a safe community. Content uploads are validated
              on type and size, and inappropriate content can be reported for
              review and removal.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      {/* tools */}
      <section className="px-4 md:px-8 py-16 bg-background">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
        Frameworks, Services & Libraries We Use
        </h1>
        <div className="relative">
          <Carousel opts={{ loop: true }}>
            <CarouselContent className="flex items-center">
              {partners.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-4"
                >
                  <div className="bg-muted rounded-xl shadow-lg p-6 h-full flex flex-col items-center justify-center transition-transform hover:scale-[1.03] duration-200">
                    {/* <img
                      src={partner.logo}
                      alt={partner.name}
                      className={`w-32 h-auto object-contain ${
                        resolvedTheme === "dark" && partner.isInverted
                          ? "invert"
                          : ""
                      }`}
                    /> */}
                    <Image src={partner.logo} alt={partner.name} width={1200} height={800} className={`w-32 h-auto object-contain ${
                        resolvedTheme === "dark" && partner.isInverted
                          ? "invert"
                          : ""
                      }`}/>
                    <p className="mt-4 text-center text-muted-foreground font-medium">
                      {partner.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Hero;
