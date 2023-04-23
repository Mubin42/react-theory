import React from "react";
import Product from "./Product";
import { useFetch } from "../custom-hooks/2-useFetch";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { loading, products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {loading
          ? "loading..."
          : products.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
      </section>
    </div>
  );
};

export default Index;
