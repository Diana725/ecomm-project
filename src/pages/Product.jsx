import { useParams } from "react-router-dom";
import React, { useContext } from 'react';
import { ShopContext } from "../context/ShopContext";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumbs";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedItems from "../components/RelatedItems/RelatedItems";

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const{productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedItems/>
    </div>
  )
}

export default Product
