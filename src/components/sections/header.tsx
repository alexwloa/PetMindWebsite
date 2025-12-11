"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      
      {/* Desktop navigation - hidden on mobile */}
      <nav className="hidden md:flex items-center gap-4 sm:gap-6">
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

      {/* Mobile navigation - dropdown menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <button className="p-2 outline-none focus:outline-none" aria-label="Menü öffnen">
            <Menu className="h-6 w-6 text-black" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <DropdownMenuItem key={link.label} asChild>
                <Link 
                  href={link.href} 
                  className={`w-full ${isActive ? 'font-semibold' : ''}`}
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;