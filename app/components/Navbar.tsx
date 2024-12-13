"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Stationery", href: "/Stationery" },
  { name: "Furniture", href: "/Furniture" },
  { name: "Food", href: "/Food" },
  { name: "Health", href: "/Health" },
  { name: "Decorations", href: "/Decorations" },
];

export default function Navbar() {
  const logo = "/umemeu.png";
  const pathname = usePathname();
  return (
    <header className="relative mb-8 border-b sm:py-2 py-1">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={80} height={80} />
          <h1 className="text-2xl md:text-3xl font-bold">
            The <span className="text-primary">Meowtique</span>
          </h1>
        </Link>

        {/* Sidebar Button */}

        <div className="flex divide-x">
          <Button
            variant={"ghost"}
            className="flex flex-col h-12 w-12 sm:h-20 sm:w-20 md:h-20 rounded-lg"
          >
            <ShoppingCart style={{ width: 30, height: 30 }} />
          </Button>
        </div>
      </div>

      <nav className="items-center justify-between mx-auto max-w-2xl lg:max-w-7xl pt-2 px-4 sm:px-6 lg:flex hidden">
        {links.map((link, index) => (
          <div key={index}>
            {pathname === link.href ? (
              <Link
                href={link.href}
                className="text-lg font-semibold text-primary"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
