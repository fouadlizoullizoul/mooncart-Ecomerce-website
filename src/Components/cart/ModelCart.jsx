import { IoCartOutline, IoCloseOutline, IoHeartOutline } from "react-icons/io5"
import { Badeges, BodyOne, Title } from "../common/CustomComponents"
import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { CartActions, clearCart, selectTotalPrice, selectTotalQuantity } from "../../redux/Slice/CartSlice"
import { NavLink } from "react-router-dom"
import CheckoutForm from "./CheckoutForm"
import { favoriteActions, selectTotalFavorites } from "../../redux/Slice/favouriteSlice"
import PropTypes from 'prop-types';

const ModelCart = () => {
    const [isOpen, setIsOpen] =useState(false);
    const [isClosing, setIsClosing] =useState(false);
    const [activeTab,setActiveTab] =useState("cart");

    const totalQuantity =useSelector(selectTotalQuantity)
    const cartItems = useSelector((state)=> state.cart.itemsList)
    const favItems = useSelector((state)=> state.favorite.favoritesItemList)
    const totalPrice = useSelector(selectTotalPrice)
    const totalFavorite = useSelector(selectTotalFavorites)

    const openModel =()=>{
        setIsOpen(true);
        document.body.style.overflowX = "hidden";
    }
    const closeModel =()=>{
        setIsOpen(false);
        setIsClosing(true);
        document.body.style.overflowX = "auto";
        setTimeout(() => setIsClosing(false), 300);
    }
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }
    const handlePaymentSuccess = () => {
        console.log("Payment Success");
        clearCart();
    }

    return (
        <>
                    <button className='relative z-20' onClick={openModel}>
                        <IoHeartOutline size={23}/> 
                        <div className='absolute -top-2 -right-1.5'>
                            <Badeges color='bg-primary-green'>{totalFavorite}</Badeges>
                        </div>
                    </button>
                    <button className='relative z-20' onClick={openModel}>
                        <IoCartOutline size={23}/> 
                        <div className='absolute -top-2 -right-1.5'>
                            <Badeges color='bg-primary-green'>{totalQuantity}</Badeges>
                        </div>
                    </button>
                    {isOpen && (
                        <>
                            <div className="cartoverlay" onClick={closeModel}></div>
                            <div className={`cartmodel p-16 text-primary ${isClosing ? "closing" : ""} `}>
                                <div className="flex justify-between gap-5">
                                    <button className={`flex items-center gap-2 font-medium ${activeTab === 'cart' ? 'text-primary' : ""}`} onClick={()=> handleTabChange('cart')}>
                                        Shopping Cart
                                        <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">{totalQuantity}</span>
                                    </button>
                                    <button className={`flex items-center gap-2 font-medium ${activeTab === 'wishlist' ? 'text-primary' : ""}`} onClick={()=> handleTabChange('wishlist')}>
                                        Wishlist
                                        <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">{totalFavorite}</span>
                                    </button>
                                </div>
                                <div className="line-container">
                                    <div className={`line ${activeTab === "cart" ? "active" : ""}`}></div>
                                    <div className={`line ${activeTab === "wishlist" ? "active" : ""}`}></div>
                                </div>
                                {activeTab == "cart" ? (
                                    <>
                                        {cartItems.map((item)=>(
                                                <CartProduct 
                                                key={item.id}
                                                id={item.id}
                                                name={item.name}
                                                price={item.price}
                                                cover={item.cover}
                                                quantity={item.quantity}
                                                />
                                        ))}
                                        <div className="flex total items-center justify-between mt-10">
                                            <Title level={6}>SubTotal:</Title>
                                            <Title level={6}>${totalPrice.toFixed(2)}</Title>
                                        </div>
                                        <NavLink to='/cart'>
                                            <CheckoutForm total={totalPrice} handlePaymentSuccess={handlePaymentSuccess}/>
                                        </NavLink>
                                        <NavLink to='/cart'>
                                        <button className="primary-btn w-full">View Cart</button>
                                        </NavLink>
                                    </>
                                ):
                                <>
                                    {favItems.map((item)=>(
                                        <FavoriteProduct
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            cover={item.cover}
                                            price={item.price}
                                            quantity={item.quantity}
                                            
                                        />
                                    ))}
                                    <NavLink to='/favourite'>
                                        <button className="primary-btn w-full mt-8">Check Your Favourite</button>
                                    </NavLink>
                                </>
                                }
                            </div>
                        </>
                    )}
        </>
    )
}

export default ModelCart

const CartProduct = ({id,cover,name,price,quantity}) => {
    const dispatch = useDispatch()
    const removeFromCart = () => {
        dispatch(CartActions.removeFromAllCart(id))
        
    }
  return (
    <>
        <div className="mt-5 border-b-2 border-gray-200 pb-5">
            <div className="flex items-center gap-5">
                <div className="images w-20 h-20">
                    {cover?.slice(0,1).map((images,i)=>(
                        <img src={images?.image} key={i} alt="" className="w-full h-full object-cover" />
                    ))}
                </div>
                <div className="details w-1/2">
                    <BodyOne>{name}</BodyOne>
                    <p className="text-primary-green"> {quantity} x ${price?.toFixed(2)} </p>
                </div>
                <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary">
                    <IoCloseOutline size={25}  onClick={removeFromCart}/>
                </button>
            </div>
        </div>
    </>
  )
}
const FavoriteProduct =({id,cover,name,price,quantity})=>{
    const dispatch =useDispatch()
    const removeCartitems=()=>{
        dispatch(favoriteActions.removeFromFavorite(id))
    }
    return(
        <div className="mt-5 border-b-2 border-gray-200 pb-5">
            <div className="flex items-center gap-5">
                <div className="images w-20 h-20">
                    {cover?.slice(0,1).map((image,i)=>(
                        <img src={image?.image} alt="" key={i} className="w-full h-full object-cover"/>
                    ))}
                </div>
                <div className="deatils w-1/2">
                    <BodyOne>{name}</BodyOne>
                    <p className="text-primary-green">
                        {quantity} x ${price?.toFixed(2)}
                    </p>
                </div>
                <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary" onClick={removeCartitems}>
                    <IoCloseOutline size={25} onClick={removeCartitems}/>
                </button>
            </div>

        </div>
    )
}
CartProduct.propTypes={
    id:PropTypes.number.isRequired,
    cover:PropTypes.arrayOf(PropTypes.string).isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    quantity:PropTypes.number.isRequired
}

FavoriteProduct.propTypes={
    id:PropTypes.number.isRequired,
    cover:PropTypes.arrayOf(PropTypes.string).isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    quantity:PropTypes.number.isRequired
}
