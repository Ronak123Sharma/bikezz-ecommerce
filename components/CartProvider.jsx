"use client";
import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      // successUrl="success"
      successUrl="http://localhost:3000/stripe/success"
      // cancelUrl="error"
      cancelUrl="http://localhost:3000/stripe/error"
      language="en-US"
      currency="INR"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
