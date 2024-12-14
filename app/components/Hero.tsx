import Image from "next/image";
import { client, urlFor } from "../lib/sanity";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-2">
        <div
          className="w-full grid grid-cols-1 grid-rows-1 lg:grid-cols-5 lg:grid-rows-3 gap-4"
          // style={{ gridTemplateColumns: "200px" }}
        >
          {/* Left Image */}
          <div className="hidden lg:flex lg:col-span-1 lg:row-span-1 items-center justify-center">
            <Image
              src={urlFor(data.image1).url()}
              alt={"Great Photo"}
              className=" object-cover object-center"
              width={150}
              height={150}
              priority
            />
          </div>

          {/* Text Section */}
          <div className="lg:col-span-3 lg:row-span-1 flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-4xl font-bold leading-tight text-center lg:text-left">
              TITLE
            </h1>
          </div>

          {/* Right Image */}
          <div className="lg:col-start-5 lg:row-start-1 flex justify-end items-start">
            <Image
              src={urlFor(data.image3).url()}
              alt={"Great Photo"}
              className="object-cover"
              width={100}
              height={100}
              priority
            />
          </div>

          {/* Bottom Left Paragraph */}
          <div className="lg:col-span-1 lg:row-span-2">
            <p className="text-gray-600">
              This is a short paragraph explaining something important or adding
              context.
            </p>
          </div>

          {/* Bottom Center Image */}
          <div className="lg:col-span-3 lg:row-span-2">
            <Image
              src={urlFor(data.image2).url()}
              alt={"Center Bottom Image"}
              className="object-cover object-center"
              width={360}
              height={360}
              priority
            />
          </div>

          {/* Bottom Right Button */}
          <div className="lg:col-span-1 lg:row-span-2 flex items-center justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* </div>
      </div> */}
      {/* <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:md-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-primary sm:text-5xl md:mb-8 md:text-6xl">
            Excellence for Every Need!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We're here to make shopping simple and delightful, with high-quality
            products spanning fashion, home, beauty, and more.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt={"Great Photo"}
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt={"Great Photo"}
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div> */}
    </section>
  );
}
