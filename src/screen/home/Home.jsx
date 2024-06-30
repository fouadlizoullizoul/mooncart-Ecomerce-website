import { Caption, Title } from "../../Components/common/CustomComponents"
import Hero from "../../Components/hero/Hero"
import InstagramPost from "../../Components/hero/InstagramPost"
import Testimonials from "../../Components/hero/Testimonials"
import Banner from "../../Components/product/Banner"
import ProductSlideCard from "../../Components/product/ProductSlide"
import ProductSlide from "../../Components/product/ProductSlide"
import { ShippingInfo } from "../../Components/product/ShippingInfo"
import Product from "./product/Product"
const Home = () => {
  return (
    <>
        <Hero/>
        <Product/>
        <ShippingInfo/>
        <Banner/>
        <ProductSlide/>
        <Testimonials/>
        <div className="container my-16 slideproduct">
          <Title level={3}>Recent Product</Title>
          <Caption>DISCOVER THE MOST TRENDING PRODUCTS IN MOONCART.</Caption>
          <br/>
          <ProductSlideCard/>
        </div>
        <InstagramPost/>
    </>
  )
}

export default Home
