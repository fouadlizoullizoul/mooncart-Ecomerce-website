import { useDispatch, useSelector } from "react-redux"
import { CartActions, selectTotalPrice, selectTotalQuantity } from "../../redux/Slice/CartSlice"
import img from '../../assets/ecomerbottlewater/Frame (1).png'
import { BodyOne, Title } from "../../Components/common/CustomComponents"
import { BiMinus, BiPlus } from "react-icons/bi"
import { IoCloseOutline } from "react-icons/io5"
import { clearCart } from "../../redux/Slice/CartSlice"
import StripCheckout from 'react-stripe-checkout'
const CartPage = () => {
    const totalQuantity =useSelector(selectTotalQuantity)
    const cartItems = useSelector((state)=> state.cart.itemsList)
    const totalPrice = useSelector(selectTotalPrice)
    const dispatch =useDispatch();
    const handleToken =(token) =>{
        console.log(token);
        dispatch(clearCart())
    }
  return (
    <>
        <section className="mt-16">
            <div className="h-[50vh]">
                <div className="images absolute top-0 left-0 w-full h-1/2">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="text absolute top-48 left-[45%]">
                    <Title level={1}>Cart</Title>
                </div>
            </div>
            <div className="container flex justify-between">
                <div className="w-2/3">
                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right">
                                <thead className="text-xs text-primary uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-16 py-5">Thumbnail</th>
                                        <th scope="col" className="px-6 py-3">Product</th>
                                        <th scope="col" className="px-6 py-3">Price</th>
                                        <th scope="col" className="px-6 py-3">Quantity</th>
                                        <th scope="col" className="px-6 py-3">Subtotal</th>
                                        <th scope="col" className="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item)=> (
                                        <CartPageCard
                                        key={item?.id}
                                        id={item?.id}
                                        name={item?.name}
                                        price={item?.price}
                                        quantity={item?.quantity}
                                        totalPrice={item?.totalPrice}
                                        cover={item?.cover}
                                        />
                                    ))}
                                </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-2/6 ml-16">
                    <div className="bg-gray-100 p-5">
                            <p  className="text-lg font-medium text-primary">Cart totals</p>
                            <hr  className="my-2 h-[2px] bg-gray-200"/>
                            <div className="text-lg font-medium text-primary flex items-center gap-5">
                                <p className="w-32">Subtotlal</p>
                                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
                                <p className="text-sm font-normal">
                                    Enter Your Address To View Shipping Options.
                                </p>
                            </div>
                            <hr className="my-3 h-[2px] bg-gray-200"/>
                            <div className="text-lg font-medium text-primary flex items-center gap-5">
                                    <p className="w-32">Total</p>
                                    <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
                            </div>
                                
                            <StripCheckout
                            token={handleToken}
                            stripeKey="pk_test_51PX4qRDIMcXDKEK4HB8BwqVWxMjPkYHtJqq5WSt93DZVFKciqMjCew8sMJGmBhhkwSHCObIBpFa3Qdbv2xazrbh000ZPxDZzG9"
                            amount={totalPrice * 100}
                            name="Gorkcoder Ecomerce Website"
                            email="email@gorkcoder.com"
                            description="Payment test using strip"
                            >
                                <button className="primary-btn mt-5">Proceed To Checkout</button>
                            </StripCheckout>        


                            
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
export default CartPage

const CartPageCard = ({cover,name,id,quantity,price,totalPrice,totalQuantity}) => {
    const dispatch =useDispatch()
    const incCartitems =()=>{
        dispatch(CartActions.addToCart({id,name,price}))
    };
    const removeCartitem =()=>{
        dispatch(CartActions.removeFromCart(id))
    };
    const removeCartitems =()=>{
        dispatch(CartActions.removeFromAllCart(id))
    };
    


  return (
    <>
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="p-4">
                {cover.slice(0,1).map((image,i)=>(
                    <img src={image?.image} key={i} alt="" className="w-24 h-24 object-contain"/>
                ))}
            </td>
            <td className="px-6 py-4">
                <BodyOne>{name}</BodyOne>
            </td>
            <td className="px-6 py-4">
                ${price.toFixed(2)}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <button onClick={incCartitems} className="w-12 h-12 grid place-content-center bg-gray-100 text-primary border-gray-300">
                        <BiPlus size={20}/>
                    </button>
                    <input type="text" value={quantity} readOnly className="w-16 h-12 text-primary outline-none border border-gray-300 px-6"/>
                    <button  className="w-12 h-12 grid place-content-center bg-gray-100 text-primary border-gray-300">
                        <BiMinus onClick={removeCartitem} size={20}/>
                    </button>
                </div>
            </td>
            <td className="px-6 py-4">
                <BodyOne>${totalPrice.toFixed(2)}</BodyOne>
            </td>
            <td className="px-6 py-4">
                <button onClick={removeCartitems} className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white">
                    <IoCloseOutline size={25}/>
                </button>
            </td>
        </tr>
    </>
  )
}

