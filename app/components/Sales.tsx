import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "product" && sale >= 20][0..3] {
      _id,
      name,
      price,
      sale,
      "slug": slug.current,
      "imageUrl": images[0..1].asset->url,
      "categoryNames": categories[]->name,
    }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Sales() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our <span className="text-primary">Sales</span> Products
          </h2>
          <Link href="/all" className="text-primary flex items-center gap-x-1">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 g xl:gap-x-4 xl:gap-y-8">
          {data.map((product) => (
            <div
              key={product._id}
              className="shadow-lg border border-gray-200 group relative p-4"
            >
              <Link href={`/product/${product.slug}`}>
                <div className="relative aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl[0]}
                    alt="Product Image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />

                  {product.sale > 0 ? (
                    <span className="absolute left-0 top-0 rounded-br-lg bg-primary px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                      Sale
                    </span>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="mt-4 flex justify-between">
                  <div className="">
                    <div className="flex items-center">
                      <span className="text-xs font-medium text-gray-900 line-through mr-1">
                        ${product.price}
                      </span>
                      <span className="text-base mb-0.5 text-primary">
                        $
                        {(
                          (product.price * (100 - (product.sale ?? 0))) /
                          100
                        ).toFixed(2)}
                      </span>
                    </div>
                    <h3 className="text-sm justify-between">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categoryNames?.length > 0
                        ? product.categoryNames.join(", ")
                        : "Unisex"}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
