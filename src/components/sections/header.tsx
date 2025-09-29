"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-6 flex items-center justify-between">
      {/* Top-left logo and brand */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/icon.png"
          alt="PetMind logo"
          width={36}
          height={36}
          className="h-9 w-9 rounded-full"
        />
        <span className="text-2xl font-semibold text-black">PetMind</span>
      </Link>
    </header>
  );
};

export default Header;