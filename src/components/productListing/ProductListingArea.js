import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Input } from "reactstrap";
import ProductCard from "../product/ProductCard";
import SlickSlider from "../toolbox/SlickSlider";
import { getProductsByCategory } from "../../redux/actions/productActions";
import Slider from "react-slick";
import SliderComponent from "../toolbox/SliderComponent";

export default function ProductListingArea({ ...props }) {
  const params = useParams();

  const specialProducts = useSelector((state) => state.specialProductsReducer);
  const listedProducts = useSelector((state) => state.listedProductReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByCategory(params.categoryId));
  }, [params]);
 
  return (
    <div className="" >
      <div className="d-flex justify-content-between  ">
        <div>
          <strong>{params.categoryName}</strong> için toplam{" "}
          <strong>{2}</strong>adet ürün listenmiştir
        </div>
        <Input
          type="select"
          style={{
            width: "min-content",
            minWidth: "150px",
            textAlign: "center",
          }}
        >
          <option>Sıralama Ölçütü</option>
        </Input>
      </div>
      <div style={{ borderRadius: "10px", backgroundColor: "lightblue" }}></div>
      <div id="search-label-filter " style={{ display: "block",width:"80vw" }}><SliderComponent /></div>
      <div id="search-label-filter2 " style={{ display: "none",maxWidth:"100%" }}>
      
      </div>
      <Button outline color="info" className="rounded-4 px-3 p-2 mx-2">
        Apple
      </Button>
      ,
      <div id="listArea">
        <div className="d-flex  justify-content-center  flex-wrap">
          {listedProducts.map((item) => (
            <div
              className="boder "
              style={{
                flex: "1 1 100px",
                display: "grid",
                placeItems: "center",
              }}
            >
              <div>
                {" "}
                <ProductCard product={item} />
              </div>
            </div>
          ))}
          {console.log(listedProducts)}
        </div>
      </div>
    </div>
  );
}
