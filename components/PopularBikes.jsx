"use client";
import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import Link from "next/link";
import PopularBikesCarousel from "./PopularBikesCarousel";

const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id,categories)]{
        _id,
          name,
          description,
          images,
          price,
          price_id,
          "slug": slug.current,
          "categories": categories[] -> {
          name
          } 

      }`;
  const data = await client.fetch(
    query,
    {},
    {
      cache: "no-cache",
    }
  );
  return data;
};

const PopularBikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      const data = await getData();
      setBikes(data);
    };

    fetchBikes();
  }, []);

  // console.log(bikes);
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="text-center mb-[30px]">
          The World's Premium Brands in one Destination
        </p>
        <PopularBikesCarousel bikes={bikes} />
        <Link href="/our-bikes">
          <button className="btn btn-accent mx-auto">See all bikes</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularBikes;
