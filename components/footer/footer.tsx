import { Github, Instagram, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    // <footer className="border-t py-4 mt-2 text-center text-sm text-muted-foreground h-[50px]">
    <footer className="text-center text-sm text-muted-foreground h-[40px] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 flex flex-row items-center justify-between gap-2 sm:gap-4 text-center md:text-left">
        {/* Navigation Links */}
        <div className="hidden sm:flex flex-wrap justify-center md:justify-start items-center gap-4 w-[30%]">
          <h2 className="cursor-pointer hover:underline">About</h2>
          <h2 className="cursor-pointer hover:underline">Privacy</h2>
          <h2 className="cursor-pointer hover:underline">Terms</h2>
        </div>

        {/* Copyright */}
        <p className="text-[10px] md:text-sm w-auto sm:w-[40%] text-center">
          &copy; {new Date().getFullYear()} StreamReels. Built for creators, by creators.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end items-center gap-1 sm:gap-4 w-auto sm:w-[30%]">
          <Twitter className="cursor-pointer hover:text-primary transition h-[12px] sm:h-auto" />
          <Instagram className="cursor-pointer hover:text-primary transition h-[12px] sm:h-auto" />
          <Github className="cursor-pointer hover:text-primary transition h-[12px] sm:h-auto" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
