import { useState } from "react";
import { herolist } from "../../assets/Data/db"
import { BodyOne, Caption, Title } from "../common/CustomComponents"
import PropTypes from 'prop-types';
import Slider from "react-slick";
import {  motion } from "framer-motion"
import { HiArrowSmallRight , HiArrowSmallLeft } from "react-icons/hi2";
import img1 from '../../assets/ecomerbottlewater/3cc393f2171a405bb9dfb516629b0b3d.jpeg'
import img2 from '../../assets/ecomerbottlewater/349c6f500b314490beec68a3bf8a8326.jpeg'

function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className="absolute bottom-0 left-96 lg:left-1/2 slider-btn" onClick={onClick}>
        <button className="next">
        <HiArrowSmallRight  size={50}  />
        </button>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
        <motion.div  className="absolute bottom-0 bg-white text-primary left-96 lg:left-[46.5%] slider-btn z-10" onClick={onClick}>
        <button >
        <HiArrowSmallLeft  size={50}  /> 
        </button>
      </motion.div>
    );
  }
  const Hero = () => {
    const [animKey, setAnimKey] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        fade: true,
        nextArrow: <SampleNextArrow onClick={() => setAnimKey(animKey + 1)}   />,
        prevArrow: <SamplePrevArrow onClick={() => setAnimKey(animKey + 1)}  />,
        beforeChange: () => setAnimKey(animKey + 1), // Trigger animation restart
      }
  return (
    <>
     <motion.section 
         className="h-[50vh] lg:h-[90vh] mt-20 bg-white-100 relative z-1">
        <Slider {...settings}
         
        >
        {herolist.map((item)=>(
            <HeroItem key={`${item.id}-${animKey}`} 
            title={item.title}
            description={item.description}
            img={item.img}
            prices={item.price}
            color={item.color}
            animKey={animKey}
            />
        ))}
        </Slider>
     </motion.section>
     <Banner/>
    </>
  )
}
export default Hero
export  const HeroItem = ({title,description,img,prices,color,animKey}) => {
    const list = {
        hidden:{
            opacity:0,
            y:'-100vw'
          },
          visible:{
            opacity:1,
            y:0,
            transition:{
              type:"spring",
              delay:0.5,
              mass:0.4,
              damping:8,
              when: "beforeChildren",
            }
          },
    }
    const childVariants={
        hidden:{
            opacity:0,
            y:'-100vw'
          },
          visible:{
            opacity:1,
            y:0,
            transition:{
              type:"spring",
              delay:0.5,
              when: "beforeChildren",
            }
          },
      }
    const [selectedColor,setSelectedColor]= useState(color[0].value);
    const [selectedPrice,setSelectedPrice]=useState(
        prices.find((price)=> price.color === color[0].value)
    )
    const handleColorClick=(color)=>{
        const newSelectedPrice =prices.find((price)=> price.color === color)
        setSelectedColor(color)
        setSelectedPrice(newSelectedPrice)
    }
    return (
     
       <motion.section
       variants={list}
       initial="hidden"
       animate="visible"
       className="content flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
        <div className="left w-2/3 p-8 lg:p-32 lg:py-64">
                <motion.div 
                key={`${title}-${animKey}`}
                variants={childVariants}
                >
                    <Title level={1} className="leading-none font-Audiowide font-medium md:text-[2rem] lg:text-[70px] lg:leading-snug">
                    {title}
                    </Title> 
                </motion.div>

            <motion.div
             className=""
             variants={list}
             initial="hidden"
             animate="visible"
             key={`${description}-${animKey}`}
            >
                <BodyOne>{description}</BodyOne> 
            </motion.div>
          <div className="flex items-start gap-8 my-5">
            <motion.div
            variants={list}
            initial="hidden"
            animate="visible"
            key={`${prices}-${selectedColor}`}
            >
                <Caption>Prices</Caption>
                <div className="mt-3">
                    <Title level={5}>${selectedPrice.value.toFixed(2)}</Title>
                </div>
            </motion.div>
            <div>
                <Caption>Colors</Caption>
                <div className="flex items-center justify-center gap-3 mt-5">
                    {color.map((color,i)=>(
                        <div 
                        style={{backgroundColor:color.value}}
                        key={i}
                        onClick={()=> handleColorClick(color.value)}
                        className={`w-4 h-4 rounded-full cursor-pointer border-gray-300 ${selectedColor === color.value ? "selected" :""}`}
                        >

                        </div>
                    ))}
                </div>
            </div>
          </div>
          <motion.div 
            className="flex items-center gap-8"
            variants={list}
            key={`${img}-${animKey}`}
            >
            <button className="primary-btn uppercase">View detils</button>
            <button className="secondary-btn uppercase">View shop</button>
          </motion.div>
          
        </div>
        <div className="right bg-white p-5 w-1/2 flex h-full justify-center items-center relative z-50">
            <motion.img
            key={`${img}-${animKey}`}
             animate={{
                scale:[1,2,2,1,1],
                rotate:[0,0,0,0,0],
                transition:{
                    duration:2,
                    ease:"easeOut",
                }
            }}
            src={img} alt=""  className="h-[50vh] w-full  object-contain z-[100] "/>
        </div>
        <div className="lg:bg-black lg:h-[90vh] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"></div>
       </motion.section>
     
    )
  }

const Banner = ()=>{
  return(
    <>
    <div className="py-20 container flex flex-col lg:flex-row items-center gap-5">
        <div>
          <BannerCard  title="Wooden Water Bottles" desc="UP TO 60% OFF" cover={img1} />
        </div>
        <div className="felx justify-between flex-col gap-8">
        <BannerCard  title="Wooden Shoop Now" desc="UP TO 60% OFF" cover={img2} className=''/>

        </div>
    </div>
    
    </>
  )
}
const BannerCard = ({title,desc,cover,className,classSecond})=>{
  return(
    <>
    <div className="w-full h-full relative ">
        <img src={cover} alt="" className="h-[85vh] w-[70vh] object-cover opacity-85" />
        <div
        className={`${className ? "absolute   bottom-0 p-8 w-full" : "flex opacity-0 hover:opacity-100 hover:duration-500 absolute bottom-0 p-8 w-full"} ${className && classSecond ? "left-0 h-[100px] lg:left-48 top-0 w-96" :""}`}
        >
          <div>
            <Title level={2} className="text-white font-Audiowide">{title}</Title>
            <p className="text-lg font-normal leading-none">{desc}</p>
          </div>
          <div className="w-1/2 mt-5">
            <button className="secondary-btn flex justify-end">Shop Now</button>
          </div>
        </div>
        
    </div>
    
    </>
  )
}
HeroItem.propTypes={
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    img:PropTypes.any.isRequired,
    color:PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
          })
    ),
    prices: PropTypes.arrayOf(
        PropTypes.shape({
          color: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        })
      ).isRequired,
      animKey: PropTypes.number.isRequired,
}