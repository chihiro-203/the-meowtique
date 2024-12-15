"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Sidebar() {
  return (
    <Sheet defaultOpen>
      <SheetContent
        className="left-0 w-[15vw] transform translate-x-0 duration-50 data-[state=open]:animate-out data-[state=closed]:animate-in data-[state=closed]:fade-in-0"
      >
        <SheetHeader>
          <SheetTitle>Test?</SheetTitle>
          <SheetDescription>Test</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
