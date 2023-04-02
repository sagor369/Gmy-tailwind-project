import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const PriceCart = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="mx-16">
      <h1 className="bg-purple-500 mt-4 py-3 text-center text-5xl font-extrabold">
        Total Price List
      </h1>
      <div className="grid grid-cols-3 gap-3 ">
        {prices.map((price) => (
          <Cart 
            key={price.id} 
            price={price}
          >
          </Cart>
        ))}
      </div>
    </div>
  );
};

export default PriceCart;
