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
    <header className="py-4 px-4 md:px-6 flex items-center justify-between max-w-5xl mx-auto">
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <Image
          src="/icon.png"
          alt="PetMind logo"
          width={32}
          height={32}
          className="h-8 w-8 rounded-lg"
        />
        <span className="text-lg font-semibold text-white tracking-tight">PetMind</span>
      </Link>

      <nav className="hidden md:flex items-center gap-6">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm no-underline transition-colors duration-200 ${
                isActive
                  ? 'text-white font-medium'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <button className="p-2 outline-none focus:outline-none" aria-label="Menü öffnen">
            <Menu className="h-5 w-5 text-white" />
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
