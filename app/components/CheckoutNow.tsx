"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckoutNow({
  currency,
  description,
  name,
  price,
  price_id,
  sale,
  image,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    localStorage.setItem("previousPage", window.location.href);
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    price_id: price_id,
    sale: sale,
    currency: currency,
    image: urlFor(image).url(),
  };

  return (
    <Button
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      CheckOut Now
    </Button>
  );
}
