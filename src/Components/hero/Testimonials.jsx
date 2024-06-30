import img from '../../assets/ecomerbottlewater/400-4000707_man-pointing-his-finger-to-right-hd-png-removebg-preview.png'
import img1 from '../../assets/ecomerbottlewater/Male-ideal-beauty.jpg'
import img2 from '../../assets/ecomerbottlewater/men-service-face.jpg'
import { HiArrowSmallRight , HiArrowSmallLeft } from "react-icons/hi2";
import { BodyOne, Title } from '../common/CustomComponents'
import Slider from 'react-slick';
function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className="absolute bottom-0 right-0 bg-white text-primary  rounded-full slider-btn" onClick={onClick}>
        <button className="next">
        <HiArrowSmallRight  size={50}  />
        </button>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
        <div  className="absolute bottom-0 right-20 bg-white text-primary  rounded-full slider-btn" onClick={onClick}>
        <button >
        <HiArrowSmallLeft  size={50}  /> 
        </button>
      </div>
    );
  }
const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow   />,
        prevArrow: <SamplePrevArrow   />,
      }
  return (
    <>
        <section className="testimonials">
            <div className="container h-full flex items-center justify-center">
                <div className="w-1/2  flex relative z-50">
                    <div className="box w-96 h-96  bg-white rounded-full z-50">
                        <img className="absolute  -top-[144px] left-0 z-10 rounded-full" src={img} alt="" />
                    </div>
                    <div className='bg-[rgba(255,255,255,0.5)] px-5 backdrop-blur-sm p-3 absolute top-[1rem] right-[60px] z-50'>
                        <BodyOne className='leading-none'>Our Satisfied User</BodyOne>
                            <div className='flex items-center'>
                                <img src={img1} alt="" className='w-14 h-14 object-cover rounded-full border-2 border-gray-200' />
                                <img src={img2} alt="" className='-ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-200' />
                                <span className='-ml-4 w-14 h-14 object-cover rounded-full border-2 border-gray-300 bg-slate-50 flex items-center juc' >+12K</span>
                            </div> 
                        
                    </div>
                </div>
                <div className='left w-1/2 relative z-50'>
                    <Title level={2}>What Our Client Say About Us</Title>
                    <BodyOne className='mb-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae atque laudantium non dolore voluptate corporis nemo alias id similique fugit!
                    </BodyOne>
                    <Slider {...settings}>
                            <TestimonialsCard name='Kenneth Fong' post='Undergraduate Student' cover={img1} />
                            <TestimonialsCard name='Joe Do' post='Postgraduate Student' cover={img2} />
                    </Slider>
                

                </div>
            </div>
        </section>   
    </>
  )
}
export default Testimonials
export const TestimonialsCard =({cover,name,post})=>{
    return(
        <>
            <div className='flex items-center gap-8'>
                <div className='w-20 h-20'>
                    <img src={cover} alt="" className='w-full h-full object-cover rounded-full' />
                </div>
                <div className='details'>
                    <Title className='font-medium leading-none' level={5}>
                        {name}
                    </Title>
                    <p>{post}</p>
                </div>
            </div> 
        </>
    )
}