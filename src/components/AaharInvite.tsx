"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

interface PopupProps {
  imageUrl: string;
  altText: string;
}

export function AaharInvite({ imageUrl, altText }: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000); // Delay the popup appearance
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 max-w-md z-[4000]">
        <div className="relative">
          {/* <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button> */}
          <div className="p-1">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={altText}
              width={400}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
