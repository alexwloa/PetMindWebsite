"use client";
import React from 'react';
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "Contact" },
    { href: "/impressum", label: "Impressum" },
  ];

  const visibleLinks = links.filter((link) => link.href !== pathname);

  return (
    <footer className="mt-2 w-full pb-8">
      <div className="container border-t border-border pt-4">
        <nav className="mb-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {visibleLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm hover:underline">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-center">
          © 2025 PetMind. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;