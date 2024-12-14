"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  sale: number;
  currency: string;
  image: ;
}

export default function AddToBag({
  currency,
  description,
  name,
  price,
  sale,
  image,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  // const salePrice = sale > 0 ? price * (1 - sale / 100) : price;

  const product = {
    name,
    description,
    price: price,
    sale: sale,
    currency,
    image: urlFor(image).url(),
    id: name,
  };

  return (
    <Button
      onClick={() => {
        addItem(product); // Add product to the cart
        handleCartClick(); // Open the cart
      }}
    >
      Add To Cart
    </Button>
  );
}
