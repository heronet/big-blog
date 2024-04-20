"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-between items-center px-4 flex">
      <div className="py-4">
        <Link href={"/"} className="font-bold text-xl ">
          BigBlog
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
}
