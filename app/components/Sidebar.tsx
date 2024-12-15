"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Heart,
  PenTool,
  Armchair,
  Apple,
  Cross,
  Paintbrush,
} from "lucide-react";

const links = [
  { name: "Home", href: "/", icon: Home },
  { name: "Men", href: "/Men", icon: User },
  { name: "Women", href: "/Women", icon: Heart },
  { name: "Stationery", href: "/Stationery", icon: PenTool },
  { name: "Furniture", href: "/Furniture", icon: Armchair },
  { name: "Food", href: "/Food", icon: Apple },
  { name: "Health", href: "/Health", icon: Cross },
  { name: "Decorations", href: "/Decorations", icon: Paintbrush },
];

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="left-0 w-[32vw] transform translate-x-0 duration-50 data-[state=open]:animate-out data-[state=closed]:animate-in data-[state=closed]:fade-in-0">
        <SheetHeader>
          <SheetTitle className="flex">
            <div className="text-base py-5 sm:text-xl md:text-2xl font-bold">
              The <span className="text-primary">Meowtique</span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <nav className="py-5 items-left flex flex-col lg:hidden gap-y-4">
          {links.map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-sm sm:text-base md:text-lg font-semibold text-primary flex items-center"
                >
                  {React.createElement(link.icon, { className: "h-5 w-5" })}
                  <span className="ml-2">{link.name}</span>
                </Link>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary flex items-center"
                >
                  {React.createElement(link.icon, { className: "h-5 w-5" })}
                  <span className="ml-2">{link.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* <div className=""></div> */}
      </SheetContent>
    </Sheet>
  );
}
