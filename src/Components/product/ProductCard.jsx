import { BsCartPlusFill } from "react-icons/bs";
import { FaHeart, FaInstagram, FaTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BodyOne, Title } from "../common/CustomComponents";
import { FaFacebook, FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/Slice/CartSlice";
import { favoriteActions } from "../../redux/Slice/favouriteSlice";
export const RenderRatingStars=(rating)=>{
    const totalStars=5;
    const fullStars=Math.floor(rating);
    const hasHalfStars=rating % 1 !== 0
    const stars=[]
    for (let i = 1; i < totalStars; i++) {
        if(i <= fullStars){
            stars.push(<FaStar key={i} size={20} color='#ff8a00'/>)
        }else if(hasHalfStars && i === fullStars + 1){
            stars.push(<FaStarHalfAlt  key='half-star' size={20} color='#ff8a00'/>)
        }else{
            stars.push(<FaRegStar  key={i} size={20} color='#ff8a00'/>)
        }
        
    }
    return stars;
}




const ProductCard = ({title,price,id,images,color,discount,rating,featured,description,category}) => {
    const [isModalOpen,setModalOpen] =useState(false);
    const dispatch =useDispatch()
    const handleModalOpen=()=>{
        setModalOpen(true)
    }
    const handleModalClose=()=>{
        setModalOpen(false)
    }
    const discountPrice=price[0].value - (price[0].value * discount) / 100
    const addToCart=()=>{
        dispatch(CartActions.addToCart({id,title,price:discountPrice , images}))
    }
    const handleAddToFavorites=()=>{
        dispatch(favoriteActions.addToFavorite({id,title,price:discountPrice , images}))
    }
  return (
    <>
        <div className="product card">
            <div className="images h-96    ">
                {images.map((cover,index)=>(
                    <img src={cover?.image} key={index} alt="" className="w-full object-cover h-full" />
                ))}
                <div className="flex justify-between w-full p-5 absolute top-0 left-0">
                    {discount && <button className="discount-btn">{discount}%</button>}
                    {featured && (
                        <button className="feature-btn">{featured === true && "Featured"}</button>
                    )}
                </div>
                <div className=" overlay flex items-center gap-2 justify-center absolute bottom-0 left-0 right-0 m-5">
                    <button onClick={handleModalOpen} className="quick-view-btn product-btn primary-btn">Quick View</button>
                    <button onClick={addToCart} className="add-to-cart-btn product-btn primary-btn"><BsCartPlusFill size={23}/></button>
                    <button onClick={handleAddToFavorites} className="love-btn product-btn primary-btn"><FaHeart size={23}/></button>
                </div>
            </div>
            <div className="detils flex items-center flex-col  bg-white pt-6">
                <NavLink to={`/product-details/${id}`}>
                    <BodyOne>{title}</BodyOne>
                </NavLink>
                <div className="flex items-center gap-2 -mt-2 mb-2">
                    {RenderRatingStars(rating)}
                </div>
                <div className="flex items-center gap-3">
                    {price.slice(0,1).map((priceItem,index)=>(
                        <>
                            <BodyOne className='line-through' key={index}>
                                ${priceItem.value}
                            </BodyOne>
                            <BodyOne className='text-primary-green' >
                                ${(priceItem.value - (priceItem.value * discount) / 100).toFixed(2)}
                            </BodyOne>
                        </>
                    ))}
                </div>
            </div>
        </div>
        {isModalOpen && (
            <>
                <div className="overlay-bg" onClick={handleModalClose}>
                    <div className="modal-overlay" onClick={handleModalClose}>
                        <div className="modal-content flex justify-between" onClick={(e)=> e.stopPropagation()} >
                            <div className="w-1/2 h-[500px] overflow-hidden img-bg">
                            {images.slice(0,1).map((cover,index)=>(
                                <img src={cover?.image} key={index} alt="" className="w-full modal-image object-cover h-full" />
                            ))}
                            </div>
                            <div className="modal-details w-1/2 h-[500px] p-9 overflow-y-scroll">
                                <button className="feature-btn bg-indigo-500"> SALE {discount} OFF</button>
                                <Title level={2} className=''>{title}</Title>
                                <div className="flex items-center gap-1 -mt-2">
                                    {RenderRatingStars(rating)}
                                </div>
                                {price.slice(0,1).map((priceItem,i)=>(
                                    <div key={priceItem.value} className="flex items-center gap-3 ">
                                        <BodyOne className='line-through mt-4' >
                                            ${priceItem.value}
                                        </BodyOne>
                                        <Title  level={3} className='text-primary-green' >
                                            ${(priceItem.value - (priceItem.value * discount) / 100).toFixed(2)}
                                        </Title>
                                    </div>
                                    ))}
                                    <BodyOne className='text-sm leading-6'>{description}</BodyOne>
                                    <div className="flex items-center gap-3">
                                        <input type="text"  value='1' className="w-12 h-12 text-primary outline-none border-2 border-primary px-4" />
                                        <button className="primary-btn">ADD TO CART</button>
                                        
                                    </div>
                                    <hr className="my-5"/>
                                    <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-3">
                                                <Title level={5} className='text-lg'>
                                                    Category:
                                                    <span className="font-normal"> Wppden Product</span>
                                                </Title>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Title level={5} className='text-lg'>
                                                    Tag:
                                                    <span className="font-normal"> Wppden </span>
                                                </Title>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Title level={5} className='text-lg'>
                                                    Share:
                                                </Title>
                                                <div className="flex items-center -mt-1 gap-3">
                                                    <FaFacebook/>
                                                    <FaInstagram/>
                                                    <FaTwitter/>
                                                </div>
                                            </div>
                                            <button className="close-btn absolute top-0 right-0 w-12 h-12 flex justify-center items-center bg-primary-green text-white" onClick={handleModalClose}><IoClose/>  </button>
                                        </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )}
    </>
  )
}
export default ProductCard
