import { Github, Instagram, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="border-t py-8 mt-2 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
          <h2 className="cursor-pointer hover:underline">About</h2>
          <h2 className="cursor-pointer hover:underline">Privacy</h2>
          <h2 className="cursor-pointer hover:underline">Terms</h2>
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} StreamReels. Built for creators, by creators.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end items-center gap-4">
          <Twitter className="cursor-pointer hover:text-primary transition" />
          <Instagram className="cursor-pointer hover:text-primary transition" />
          <Github className="cursor-pointer hover:text-primary transition" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
