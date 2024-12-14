"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface iAppProps {
  images: any;
  sale: number;
}

export default function ImageGallery({ images, sale }: iAppProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="grid gap-2 lg:grid-cols-5 lg:max-h-[500px] lg:w-full">
      <div className="order-last items-center flex gap-4 lg:order-none lg:flex-col lg:overflow-y-scroll overflow-x-scroll hide-scrollbar flex-row max-w-full">
        {images.map((image: any, index: any) => (
          <div
            key={index}
            className="flex-shrink-0 h-[100px] w-[100px] overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={urlFor(image).url()}
              alt="photo"
              width={100}
              height={100}
              className={`h-[100px] w-[100px] object-cover object-center cursor-pointer ${
                index == currentIndex
                  ? "border-10 border border-primary rounded-lg"
                  : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          </div>
        ))}
      </div>

      <div className="relative items-center overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(images[currentIndex]).url()}
          alt="Current Photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />

        <ChevronLeft
          className="absolute h-full cursor-pointer left-0 top-1/2 -translate-y-1/2 text-primary text-base"
          onClick={handlePrev}
        />
        <ChevronRight
          className="absolute h-full cursor-pointer right-0 top-1/2 -translate-y-1/2 text-primary text-base"
          onClick={handleNext}
        />

        {sale > 0 ? (
          <span className="absolute left-0 top-0 rounded-br-lg bg-primary px-3 py-1.5 text-sm uppercase tracking-wider text-white">
            Sale
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
