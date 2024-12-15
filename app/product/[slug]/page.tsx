import ImageGallery from "@/app/components/ImageGallery";
import AddToBag from "@/app/components/AddToBag";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import React from "react";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    sku,
    images,
    price,
    price_id,
    sale,
    name,
    description,
    material,
    measurements,
    origin,
    "slug": slug.current,
    "categoryName": category->name,
  }`;

  const data = await client.fetch(query, { slug });
  if (!data) {
    throw new Error(`No product found for slug: ${slug}`);
  }
  return data;
}

export const dynamicParams = true;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  //   const [openDetails, setOpenDetails] = useState(false);
  //   const [openMat, setOpenMat] = useState(false);

  try {
    const { slug } = await params;
    const data: fullProduct = await getData(slug);

    return (
      <div className="bg-white pb-5">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ImageGallery images={data.images} sale={data.sale} />

            <div className="">
              <p className="mb-2 text-sm text-gray-500 tracking-wide">
                <span className="font-bold">SKU</span> {data.sku}
              </p>
              <div className="mb-2 md:mb-3">
                <h2 className="text-2xl font-bold text-gray-800">
                  {data.name}
                </h2>
              </div>

              <div className="mb-4 flex items-center gap-3 md:mb-4">
                <Button className="rounded-full gap-x-3">
                  <span className="text-sm">5.0</span>
                  <Star className="h-5 w-5" />
                </Button>

                <span className="text-sm text-gray-500 transition duration-100">
                  3 ratings
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-3">
                  {data.sale > 0 ? (
                    <>
                      <span className="text-xl font-bold text-red-500 md:text-2xl">
                        ${(
                          (data.price * (100 - (data.sale ?? 0))) /
                          100
                        ).toFixed(2)}
                      </span>
                      <span className="text-base mb-0.5 text-gray-800 line-through">
                        ${data.price}
                      </span>
                      <span className="text-base rounded-md px-2 font-bold mb-0.5 bg-red-500 text-white">
                        {data.sale ?? 0}%
                      </span>
                    </>
                  ) : (
                    <span className="text-xl font-medium text-gray-900 mr-1">
                      ${data.price}
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-500">
                  Include VAT plus shipping
                </span>
              </div>

              <div className="mb-6 flex items-cent gap-2 text-gray-500">
                <Truck className="w-6 h-6" />
                <span className="text-sm">0-15 Days Shipping</span>
              </div>

              <div className="flex gap-2.5">
                <AddToBag
                  currency="USA"
                  description={data.description}
                  name={data.name}
                  price={data.price}
                  price_id={data.price_id}
                  sale={data.sale}
                  image={data.images[0]}
                  key={data._id}
                />
                <Button variant={"secondary"}>Checkout Now</Button>
              </div>

              <div className="divider">
                <p className="mt-6 mb-1 text-base text-gray-500">
                  {data.description}
                </p>

                <hr className="my-4 border-gray-300" />
                <div>
                  <p className="my-1 text-base font-bold text-gray-500 cursor-pointer">
                    Product Details
                  </p>
                  {/* {openDetails && ( */}
                  <div>
                    <p className="my-1 text-base font-bold text-gray-500">
                      Measurements:
                    </p>
                    <p className="mb-2 text-sm text-gray-500">
                      {data.measurements.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                    <p className="my-1 text-base font-bold text-gray-500">
                      Country/Region of Origin:{" "}
                      <span className="mb-1 text-base font-normal text-gray-500">
                        {data.origin.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </span>
                    </p>
                  </div>
                  {/* )} */}
                </div>

                <hr className="my-4 border-gray-300" />
                <div>
                  <p className="my-1 text-base font-bold text-gray-500 cursor-pointer">
                    Materials & Care:
                  </p>
                  <p className="mb-2 text-sm text-gray-500">
                    {data.material.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                <hr className="my-4 border-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading product page:", error);
    return <div>Failed to load product.</div>;
  }
}
