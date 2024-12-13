import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData(category: string) {
  const normalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  const query = `*[_type == "product" && "${normalizedCategory}" in categories[]->name] {
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

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  try {
    const { category } = await Promise.resolve(params);
    const data: simplifiedProduct[] = await getData(category);
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 py-2">
              Our Products for{" "}
              <span className="bg-primary text-white rounded-md px-4 py-2">
                {category}
              </span>
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 g xl:gap-x-4 xl:gap-y-8">
            {data.map((product) => (
              <div
                key={product._id}
                className="shadow-lg border border-gray-200 group relative p-4"
              >
                <Link href={`/product/${product.slug}`}>
                  <div className="relative aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                    {product.sale > 0 ? (
                      <span className="absolute left-0 top-0 rounded-br-lg bg-primary px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                        Sale
                      </span>
                    ) : (
                      <></>
                    )}
                    <Image
                      src={product.imageUrl[0]}
                      alt="Product Image"
                      className="w-full h-full  object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div className="">
                      <div className="flex items-center">
                        {product.sale > 0 ? (
                          <>
                            <span className="text-xs font-medium text-gray-900 line-through mr-1">
                              ${product.price}
                            </span>
                            <span className="text-sm font-medium text-gray-900">
                              $
                              {((product.price * (100 - (product.sale ?? 0))) /
                                100).toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="text-sm font-medium text-gray-900 mr-1">
                            ${product.price}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm justify-between">
                        {product.name}
                      </h3>
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
  } catch (error) {}
}
