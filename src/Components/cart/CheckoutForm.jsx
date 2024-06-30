import { useDispatch } from "react-redux"
import { clearCart } from "../../redux/Slice/CartSlice"
import StripCheckout from 'react-stripe-checkout'
const CheckoutForm = ({total,handlePaymentSuccess}) => {
    const dispatch =useDispatch()
    const handleToken =token =>{
        handlePaymentSuccess()
        dispatch(clearCart())
    }
  return (
    <>
        <StripCheckout
        token={handleToken}
        stripeKey="pk_test_51PX4qRDIMcXDKEK4HB8BwqVWxMjPkYHtJqq5WSt93DZVFKciqMjCew8sMJGmBhhkwSHCObIBpFa3Qdbv2xazrbh000ZPxDZzG9"
        amount={total * 100}
        name="Gorkcoder Ecomerce Website"
        email="email@gorkcoder.com"
        description="Payment test using strip"
        >
            <button className="w-full bg-gray-200 py-3.5 my-3 font-medium">
                pay ${total?.toFixed(2)}
            </button>

        </StripCheckout>
    </>
  )
}

export default CheckoutForm
