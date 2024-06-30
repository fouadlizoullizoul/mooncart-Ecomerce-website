import { menulists } from '../../assets/Data/db'
import  {CustomeLink, Badeges }   from "../common/CustomComponents"
import { BsSearchHeart } from "react-icons/bs";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import logo from '../../assets/ecomerbottlewater/logo (4).png'
import { useEffect, useRef, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import ModelCart from '../cart/ModelCart';
const Header = () => {
    const [isOpen , setIsOpen] =useState(false);
    const [isScrolled ,setIsScrolled] =useState(false);
    const menuRef =useRef(null)

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }
    //close menu if click outside menu button
    const closeMenuOutside = (e) =>{
        if(menuRef.current &&!menuRef.current.contains(e.target)){
            setIsOpen(false)
        }
    }
    // handle scroll with animation
    const handleScroll = () =>{
        setIsScrolled(window.scrollY >0)
    }
    useEffect(()=> {
        document.addEventListener("mousedown",closeMenuOutside);
        window.addEventListener("scroll",handleScroll) ;
        return ()=>{
            document.removeEventListener("mousedown",closeMenuOutside);
            window.removeEventListener("scroll",handleScroll) ;
        }  
    },[])
    const isHomePage =location.pathname === '/'
  return (
    <header className={isHomePage ? `header px-12 py-3 bg-white-100 relative z-20  ${isScrolled ? "scrolled" : ""}`  : `header px-12 py-3  ${isScrolled ? "scrolled" : ""}  relative z-20`}>
        <div className={`${isScrolled ? "lg:bg-none" : "lg:bg-black"} lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}></div>
        <nav className='p-4 flex justify-between items-center relative'>
            <div className='flex items-center gap-14'>
                <div className=''>
                    <img src={logo} alt="" className='h-7 w-full'/>
                </div>
                <div className='hidden lg:flex items-center justify-between gap-8'>
                    {menulists.map((list)=>(
                        <li key={list.id} className='uppercase list-none'>
                            <CustomeLink href={list.path}>{list.link}</CustomeLink>
                        </li>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-8 icons">
                <div className='uppercase hidden lg:block text-inherit relative z-20'>
                    <CustomeLink href='/login' className={`${!isHomePage || isScrolled ? "text-primary" : "text-white"}`}>Login</CustomeLink>
                    <span className={`${!isHomePage || isScrolled ? "text-primary" : "text-white"}`}>/</span>
                    <CustomeLink href='/register' className={`${!isHomePage || isScrolled ? "text-primary" : "text-white"}`}>Register</CustomeLink>
                </div>
                <div className={`icon flex items-center justify-center gap-6 ${!isHomePage|| isScrolled ? "text-primary" : "text-white"}`}>
                        <BsSearchHeart size={23} />
                            <ModelCart/>
                    <button 
                    onClick={toggleMenu}
                    className='lg:hidden w-10 h-10 flex justify-center rounded-full  items-center bg-black text-white focus:outline-none'
                    >
                        {isOpen ? (<IoClose size={24}/>):(<RiMenu3Line  size={24}/>)}
                    </button>
                </div>
            </div>
                {/* Responsive menu if below  */}
                <div className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen ? "open" : "closed" } `} ref={menuRef}>
                    {menulists.map((list)=> (
                        <li className='uppercase list-none' key={list.id}>
                                <CustomeLink className={"text-white"} href={list.path}>{list.link}</CustomeLink>
                        </li>
                    ))}
                </div>

        </nav>
    </header>
  )
}

export default Header
