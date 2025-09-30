"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "Contact" },
  ];

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
      
      {/* Top-right navigation */}
      <nav className="flex items-center gap-4 sm:gap-6">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.label} 
              href={link.href} 
              className={`text-xs sm:text-sm transition-all duration-200 ease-in-out ${
                isActive 
                  ? 'underline font-semibold text-base sm:text-lg' 
                  : 'hover:underline hover:scale-105'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;