"use client";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { ScrollArea } from "./ui/scroll-area";
import CheckoutBtn from "./CheckoutBtn";

const CartSidebar = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
    formattedTotalPrice,
  } = useShoppingCart();

  const [calculatedTotal, setCalculatedTotal] = useState(0);

  useEffect(() => {
    // Log the details to debug
    console.log("cartDetails:", cartDetails);
    console.log("cartCount:", cartCount);
    console.log("totalPrice:", totalPrice);
    console.log("formattedTotalPrice:", formattedTotalPrice);

    // Manual calculation of total price
    const calculateTotal = () => {
      let total = 0;
      if (cartDetails) {
        Object.values(cartDetails).forEach((item) => {
          total += item.price * item.quantity;
        });
      }
      setCalculatedTotal(total);
    };

    calculateTotal();
  }, [cartDetails, totalPrice]);

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-12">
            My shopping cart ({cartCount})
          </SheetTitle>
        </SheetHeader>
        <>
          {cartCount === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-[760px]">
              <h5 className="text-black/50">Your Cart is Empty</h5>
            </div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh] pr-5 mb-4">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => (
                  <CartItem item={item} key={key} />
                ))}
            </ScrollArea>
          )}
        </>
        {cartCount > 0 && (
          <div>
            <div className="flex justify-between mt-4 px-4">
              <div className="uppercase mb-5">Total</div>
              <div>₹{calculatedTotal}</div>
              {/* Uncomment the line below if `formattedTotalPrice` is correct */}
              {/* <div>₹{formattedTotalPrice}</div> */}
            </div>
            <CheckoutBtn />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
