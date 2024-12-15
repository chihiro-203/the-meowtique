"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://the-meowtique.vercel.app/checkout/success"
      cancelUrl="https://the-meowtique.vercel.app/checkout/cancel"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}

export default function Providers({children} : {children: ReactNode}) {
  return (
      <CartProvider>{children}</CartProvider>
  );
}
