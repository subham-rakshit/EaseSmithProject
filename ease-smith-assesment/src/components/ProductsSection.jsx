import React from "react";
import ProductsFilterSection from "./ProductsFilterSection";
import ProductItemsSection from "./ProductItemsSection";

function ProductsSection() {
  return (
    <div className="w-full flex gap-10 mt-5">
      <ProductsFilterSection />
      <ProductItemsSection />
    </div>
  );
}

export default ProductsSection;
