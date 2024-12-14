import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import { ChevronRight } from "lucide-react";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6  lg:flex lg:max-w-7xl lg:px-8">
      <div className="hidden w-full lg:grid lg:grid-cols-5 lg:grid-rows-3">
        {/* Left Image */}
        <div className=" items-center left-0 flex col-span-1 row-span-1 lg:-mb-48">
          <Image
            src={urlFor(data.image1).url()}
            alt={"Great Photo"}
            className=" object-cover object-center rounded-lg"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col lg:col-span-3 lg:row-span-1 lg:items-end">
          <h1 className="font-bold text-end text-gray-800 lg:text-5xl lg:text-right blg:text-6xl">
            Discover Everything <br /> You Love in One Place!
          </h1>
        </div>

        {/* Right Image */}
        <div className="flex justify-end items-start lg:col-start-5 lg:row-start-1">
          <Image
            src={urlFor(data.image3).url()}
            alt={"Great Photo"}
            className="object-cover rounded-lg"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* Bottom Left Paragraph */}
        <div className="flex items-end justify-center leading-relaxed pt-20 lg:col-span-2 lg:row-span-2">
          <p className="text-gray-500 lg:text-base blg:text-lg">
            From stylish apparel to everyday essentials, we bring you top-notch
            products at unbeatable prices. Start your journey of discovery
            today.
          </p>
        </div>

        {/* Bottom Center Image */}
        <div className="flex justify-end lg:col-span-2 lg:row-span-2">
          <Image
            src={urlFor(data.image2).url()}
            alt={"Center Right Image"}
            className="object-cover rounded-lg"
            width={340}
            height={340}
            priority
          />
        </div>

        {/* Bottom Right Button */}
        <div className="flex items-end justify-end lg:col-span-1 lg:row-span-2">
          <button className="leading-relaxed flex font-normal hover:underline">
            Open Catalog <ChevronRight />
          </button>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap justify-between md:mb-16 md:flex lg:hidden">
        <div className="mb-6 flex w-full flex-col justify-center sm:md-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 sm:text-5xl md:mb-8 md:text-6xl">
            Discover Everything You Love in One Place!
          </h1>
          <p className="max-w-lg leading-relaxed text-gray-500 xl:text-lg">
            From stylish apparel to everyday essentials, we bring you top-notch
            products at unbeatable prices. Start your journey of discovery
            today.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-8 md:top-16">
            <Image
              src={urlFor(data.image4).url()}
              alt={"Great Photo"}
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image5).url()}
              alt={"Great Photo"}
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
