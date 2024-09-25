import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/shopContext";
import { productsProps } from "../assets/assets";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const { products, currency } = useContext(shopContext);
  const [newProducts, setNewProducts] = useState<productsProps[]>([]);

  useEffect(() => {
    setNewProducts(products.sort((a, b) => b.date - a.date).slice(0, 4));
  }, []);

  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-2 py-8">
        <p className="text-center text-3xl font-bold sm:text-5xl">
          NEW ARRIVALS
        </p>
        <p className="text-center text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          repellat laboriosam veniam.
        </p>
      </div>

      <div className="my-5 grid grid-cols-2 gap-5 md:grid-cols-4">
        {newProducts.map((items) => {
          return (
            <Link
              to={`/products/${items.id}`}
              key={items.id}
              className="flex flex-col items-center justify-center transition-all ease-in-out hover:scale-110"
            >
              <img
                src={items.image[0]}
                alt=""
                className="h-40 w-full overflow-hidden rounded-xl object-cover sm:h-52"
              />
              <div className="flex w-full flex-col justify-start">
                <p className="font-bold">{items.name}</p>
                <p className="text-lg font-bold">
                  {currency}
                  {items.price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center justify-center py-5">
        <button className="flex h-10 w-36 items-center justify-center rounded-full bg-black text-white">
          View All
        </button>
      </div>
      <hr className="my-5 h-[1.5px] w-full border-none bg-gray-100" />
    </div>
  );
};

export default NewArrivals;
