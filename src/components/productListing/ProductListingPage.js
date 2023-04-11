import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Col, Input, Row } from "reactstrap";
import ProductFilterArea from "./ProductFilterArea";
import ProductListingArea from "./ProductListingArea";

function ProductListingPage({...props}){

const params=useParams()

useEffect(()=>{
    console.log(params)
})

return (
    <div>
        <Breadcrumb>
        <BreadcrumbItem>asdf</BreadcrumbItem>
        <BreadcrumbItem>asdf</BreadcrumbItem>
        <BreadcrumbItem>asdf</BreadcrumbItem>
        <BreadcrumbItem>asdf</BreadcrumbItem>
        <BreadcrumbItem>asdf</BreadcrumbItem>
        <BreadcrumbItem>asdf</BreadcrumbItem>
        
        </Breadcrumb>

<div className="d-flex justify-content-around  w-100 flex-wrap">

    <Row>
        <Col><ProductFilterArea/></Col>
        <Col><ProductListingArea/></Col>
    </Row>
<div id="filterArea" className="borde " style={{flex:"1 1 300px",}}></div>
<div id="productsArea" className="borde" style={{flex:"6 1 600px"}}></div>
    
</div>

    </div>
)


} 

export default ProductListingPage;