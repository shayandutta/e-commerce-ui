"use client";

import Image from "next/image";

import { ProductType } from "@/types";

const ProductCard = ({ product }: { product: ProductType }) => {
  //props with the type of the product -> basically saying that we are going to get product from the parent component as a prop and the type of the product is ProductType. So types need to be mentioned here and also in the parent component.
  return (
    <div className="w-full">
        Product Card
    </div>
  );
};

export default ProductCard;
