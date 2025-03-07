"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  price_id: string;
  sale: number;
  currency: string;
  image: any;
}

export default function AddToBag({
  currency,
  description,
  name,
  price,
  price_id,
  sale,
  image,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    price_id: price_id,
    sale: sale,
    currency: currency,
    image: urlFor(image).url(),
    // id: name,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}
