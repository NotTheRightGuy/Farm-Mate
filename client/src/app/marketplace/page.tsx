import ProductCards, { marketplaceData } from "@/components/ProductsCard";
import React from "react";

function page() {
  return (
    marketplaceData.map((product) => (
      <ProductCards
        key={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.image}
      />
    ))
  );
}

export default page;
