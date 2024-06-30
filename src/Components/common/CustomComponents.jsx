import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomeLink = ({href,className,children}) => {
    const linkStyles= "text-[15px] font-medium list-none cursor-pointer list-none"
  return (
    <NavLink
    to={href}
    className={({isActive})=> isActive ? `${className} ${linkStyles} text-primary-green ` :`${className} ${linkStyles}`}
    >
        {children}
    </NavLink>
  )
}

const Badeges = ({color,children}) => {
  return (
        <div className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white`}>
            {children}
        </div>
  )
}
const Title =({level,children,className})=>{
  const Heading =`h${level}`;
  const classes =`font-medium ${
      level === 1 ? "text-[80px] font-[600] text-primary" 
    : level === 2 ? "text-[40px] font-[700] text-primary"
    : level === 3 ? "text-[28px] font-[700] text-primary" 
    : level === 4 ? "text-[28px] font-[700] text-primary"
    : level === 5 ? "text-[22px] font-[600] text-primary"
    : "text-[18px] font-[500] text-primary"
  }`
  return React.createElement(
    Heading,
    { className: `${className} ${classes}` },
    children
  )

}
const BodyOne = ({ children, className }) => {
  const classes = "text-lg font-normal text-primary-gray mb-4";
  return <p className={`${className} ${classes}`}>{children}</p>;
};
const Caption = ({ children }) => {
  return <p className="text-sm font-normal text-primary-gray">{children}</p>;
};






CustomeLink.propTypes ={
    href:PropTypes.string.isRequired,
    className:PropTypes.string,
    children:PropTypes.node.isRequired,
}
Badeges.propTypes ={
    color:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}

Title.propTypes ={
  level:PropTypes.oneOf([1,2,3,4,5,6]).isRequired,
  children:PropTypes.node.isRequired,
  className:PropTypes.string,
}
BodyOne.propTypes={
  children:PropTypes.node.isRequired,
  className:PropTypes.string,
}
Caption.propTypes = {
  children: PropTypes.node.isRequired,
};
export {Badeges , CustomeLink , Title , BodyOne , Caption} ;
