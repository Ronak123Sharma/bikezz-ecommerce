"use client";

import AddToCartBtn from "./AddToCart";
import { urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";

const Bike = ({ bike }) => {
  console.log("bike", bike);
  const popularBikeCat = bike.categories?.find((cat) => cat.name === "popular");

  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* badge */}
          {popularBikeCat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          )}
          {bike.images && bike.images[0] && (
            <Image
              src={urlFor(bike.images[0]).url()}
              width={240}
              height={147}
              alt={bike.name}
            />
          )}
        </div>
        {/* btn group */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn
            price_id={bike.price_id}
            name={bike.name}
            currency="USD"
            description={bike.description}
            images={bike.images}
            price={bike.price}
            btnStyles="btn-icon btn-accent"
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${bike.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      {bike.categories && bike.categories[0] && (
        <h5 className="text-gray-400 font-semibold mb-2">
          {bike.categories[0].name
            ? `${bike.categories[0].name} bike`
            : bike.categories[0]}
          {/* bike */}
        </h5>
      )}
      <h4 className="mb-1">{bike.name}</h4>
      <div className="text-lg font-bold text-accent">{`₹${bike.price}`}</div>
    </div>
  );
};

export default Bike;
