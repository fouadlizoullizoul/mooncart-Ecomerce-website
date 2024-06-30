import { useParams } from "react-router"
import { productlists } from "../../../assets/Data/db"
import { BodyOne, Caption, Title } from "../../../Components/common/CustomComponents"
import { RenderRatingStars } from "../../../Components/product/ProductCard"
import { useState } from "react"
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi"
import ProductSlide from "../../../Components/product/ProductSlide"
import ProductSlideCard from "../../../Components/product/ProductSlide"
import FilterDiscover from "../../../Components/hero/InstagramPost"
import Slider from "react-slick"

const colorsvalue={
    red: "#fe7fef",
    yellow: "#ffff00",
    green: "#008000",
    blue: "#0000ff",
    white: "#f8f8f8",
    brown: "#a52a2a",
    clear: "#ffffff",
    "dark brown": "#654321",
    light: "#f5f5dc",
    black: "#000000",
    natural: "#8b4513",
    "light brown": "#deb887",
    dark: "#696969",
    gray: "#808080",
    beige: "#f5f5dc",
}

const ProductDeatils = () => {
    const {productId} =useParams()
    const product =productlists.find(
        (product)=>product.id=== parseInt (productId)
    )
    const {title , images , price,description , discount , rating ,color} =product
    if(!product){
        return <h1>No Product Found</h1>
    }
    const [selectedColor,setSelectedColor]= useState(color[0].value);
    const [selectedPrice,setSelectedPrice]=useState(
        price.find((price)=> price.color === color[0].value)
    )
    const handleColorClick=(color)=>{
        const newSelectedPrice =price.find((price)=> price.color === color)
        setSelectedColor(color)
        setSelectedPrice(newSelectedPrice)
    }
    const CustomPage =({index,onClick})=>(
        <div className="w-[20rem]  gap-">
            <img src={images[index].image} onClick={onClick} alt="" className="h-[5rem] object-cover absolute top-0"/>
        </div>
    )
    const settings = {
        customPaging:(i)=> <CustomPage index={i}/>,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
        <section className="container  mt-32 slideproduct">
            <div className="flex justify-between flex-col lg:flex-row" key={productId}>
                <div className="images lg:w-1/2">
                    <div>
                        <Slider {...settings}>
                        {images.map((image,index)=>(
                            <img src={image.image} alt="" className="w-full h-full object-cover " key={index} />
                        ))}
                        </Slider>
                    </div>
                </div>
                <div className="deatils lg:w-1/2 px-16 pt-16">
                    <button className="feature-btn bg-indigo-600">SALE {discount}% OFF</button>
                    <Title level={2} className='my-2'>
                        {title}
                    </Title>
                    <div className="flex items-center gap-2 -mt-5 mb-5">
                            <div className="flex items-center gap-1">
                                {RenderRatingStars(rating)}
                            </div>
                            <p>{product.rating} Review</p>
                    </div>
                    <p className="text-[15px]">{description}</p>
                    <br />
                    <div>
                        <Caption>Colors</Caption>
                        <div className="flex items-center gap-3 mt-5">
                        {color.map((color,i)=>(
                        <div 
                        style={{backgroundColor:colorsvalue[color.value]}}
                        key={i}
                        onClick={()=> handleColorClick(color.value)}
                        className={`w-4 h-4 rounded-full cursor-pointer border-gray-300 ${selectedColor === color.value ? "selected" :""}`}
                        >

                        </div>
                    ))}
                        </div>
                    </div>
                    <div className="mt-5">
                        <Caption>Prices</Caption>
                        <div className="flex items-center gap-3">
                            <BodyOne className='line-through mt-4'>${selectedPrice.value}</BodyOne>
                            <Title  level={3} className='text-primary-green' >${(selectedPrice.value - (selectedPrice.value * discount) / 100).toFixed(2)}</Title>
                        </div>
                    </div>
                    <br />
                    <div className="flex items-center gap-3">
                        <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                            <BiPlus size={20}/>
                        </button>
                        <input type="text" value='1' className="w-16 h-12 text-primary outline-none border border-gray-300 px-6" />
                        <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                            <BiMinus size={20}/>
                        </button>
                        <button className="primary-btn">
                            ADD TO CART
                        </button>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        <button className="flex items-center gap-2 secondary-btn">
                            <BiHeart size={20}/>
                            Add to Wishlist
                        </button>
                        <button className="flex items-center gap-2 secondary-btn">
                            Compare
                        </button>
                    </div>
                    <hr className="my-5"/>
                    <label htmlFor="">
                        <span className="text-primary font-bold">SKU:</span>PRT584E63A
                    </label><br />
                    <label htmlFor="">
                        <span className="text-primary font-bold">Category:</span>House Product
                    </label>
                </div>
            </div>
            <div className="flex justify-between flex-col lg:flex-row my-10">
                <div className="lg:w-1/2">
                    <Title level={3}>Fits Your Child</Title>
                    <Caption>
                        Deigned for superior performance and performance improvements for your child category
                        and ages, these products are designed to be comfortable, durable, and easy to use.
                        They are suitable for children aged 5-11 years old and will be compatible with all child categories and categories
                        and ages of your child category and will be compatible with all child categories and categories of your child category
                        and will be compatible with all child categories and categories of your child category and will be compatible with
                        your child category and will be compatible with all child categories and categories of your child category and will be compatible with
                    </Caption>
                    <Title level={3} className='mt-5'>Sepecifications</Title>
                    <div className="flex flex-col gap-3 mt-2">
                    <Caption> Assembled Dimension (L X W X H):21.5" X 19" X 26"</Caption>
                    <Caption>Assembled Product Weight:25 lbs.</Caption>
                    <Caption>Harness Mode - Forward-Facing25-65 lbs .</Caption>
                    <Caption>Booster Mode - Harness + Booster40-100 lbs .</Caption>
                    <Caption>Booster Mode - Backlessen/a .</Caption>
                    <Caption>Rear-Facing - Chil Max Height Capacity43 in .</Caption>
                    <Caption>Forward-Facing - Child Max Height Capacity54 in.</Caption>   
                    </div>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-5 lg:px-8 mt-5">
                    <ProductDeatilsBox title="All-in-One Car Seat" desc="One Car seat fits your child, vehicle and life from birth through booster "/>
                    <ProductDeatilsBox title="Space-Saving Design" desc="One Car seat fits your child, vehicle and life from birth through booster "/>
                    <ProductDeatilsBox title="Easiest To Install Correctly" desc="One Car seat fits your child, vehicle and life from birth through booster "/>
                    <ProductDeatilsBox title="No Added Chemicals" desc="One Car seat fits your child, vehicle and life from birth through booster "/>

                </div>
            </div>
            <Title>Related Products</Title>
            <ProductSlideCard/>
        </section>
        <br />
        <FilterDiscover/>
    </>
  )
}
export default ProductDeatils

const ProductDeatilsBox = ({title , desc}) => {
  return (
    <>
        <div className="flex items-center justify-center flex-col gap-3 text-center bg-gray-100 p-8 lg:p-0">
            <Title>{title}</Title>
            <Caption>{desc}</Caption>
        </div>
    </>
   
  )
}

