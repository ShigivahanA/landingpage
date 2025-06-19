// components/Navbar.tsx
"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href="/">SITM</Link>
        </div>
      </div>
    </nav>
  );
}
