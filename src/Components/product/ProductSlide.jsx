import Slider from "react-slick"
import { productlists } from "../../assets/Data/db"
import { BodyOne, Title } from "../common/CustomComponents"
import ProductCard from "./ProductCard"
import { HiArrowSmallRight , HiArrowSmallLeft } from "react-icons/hi2";

const ProductSlide = () => {
  return (
    <>
        <section className="py-20 bg-white slideproduct">
            <div className="container">
                <Title level={4}>what is trending now</Title>
                <div className="flex items-center gap-3 uppercase">
                    <BodyOne className='text-sm'>
                        DISCOVER THE MOST TRENDING PRODUCTS IN MOONCART
                    </BodyOne>
                </div>
                <ProductSlideCard/>
            </div>
        </section>
    </>
  )
}
export default ProductSlide
function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className="absolute top-[32%] -right-5 lg:-right-32  rounded-full slider-btn" onClick={onClick}>
        <button className="next">
        <HiArrowSmallRight  size={50}  />
        </button>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
        <div  className="absolute top-[32%] -left-5 lg:-left-32  rounded-full slider-btn z-10" onClick={onClick}>
        <button >
        <HiArrowSmallLeft  size={50}  /> 
        </button>
      </div>
    );
  }
  const ProductSlideCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow:4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow   />,
        prevArrow: <SamplePrevArrow   />,
        responsive:[
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  intialSlide:2,                  
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
        ]
      }
  return (
    <>
        <Slider {...settings}>
           {productlists.map((product)=>(
                  <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  images={product.images}
                  color={product.color}
                  discount={product.discount}
                  rating={product.rating}
                  featured={product.featured}
                  description={product.description}
                  category={product.category}
                  />
                ))}   
        </Slider>
          
    </>
  )
}
