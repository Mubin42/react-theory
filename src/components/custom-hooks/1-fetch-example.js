import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);
  return (
    <div>
      <h2>
        {loading
          ? "loading..."
          : products.map((product) => {
              return (
                <div className="item">
                  <h4>{product.fields.company}</h4>
                  <p>{product.fields.price}</p>
                </div>
              );
            })}
      </h2>
    </div>
  );
};

export default Example;
