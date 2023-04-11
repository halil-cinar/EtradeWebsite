import { useParams } from "react-router-dom";
import ProductDetailPage from "../root/ProductDetailPage";
import { useEffect } from "react";

export default function ProductDetailPageConnection() {
    const params = useParams();
    useEffect(()=>{
      window.scrollTo(0,0)
    })
    return (
      <ProductDetailPage params={params}/>
    );
  }