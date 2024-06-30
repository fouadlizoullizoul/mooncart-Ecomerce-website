import logo from '../../assets/ecomerbottlewater/logo (4).png'
import { BodyOne, Caption, CustomeLink, Title } from './CustomComponents'

const Footer = () => {
  return (
    <>
      <footer className="py-14">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="" className='h-7'/>
              <div className='flex flex-col gap-2 mt-5'>
                  <Caption>Address : 123 Rabat , Morocco</Caption>
                  <Caption>Email : example@domain.com</Caption>
                  <Caption>Phone : +212 555 555 555</Caption>
              </div>
              <br />
              <BodyOne>Subscribe To Our Newsletter</BodyOne>
              <input type="text" className='p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none' placeholder='Enter Your Email Address' />
          </div>
          <div>
            <Title>Our Stores</Title>
              <div className='flex flex-col gap-4'>
                  <CustomeLink className='text-gray-400'>Normal</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop With Sidebar</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop With Category</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop Filters Top Bar</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop Wide</CustomeLink>
                  <CustomeLink className='text-gray-400'>My Account</CustomeLink>
              </div>
          </div>
          <div>
            <Title>Usefull Links</Title>
              <div className='flex flex-col gap-4'>
                  <CustomeLink className='text-gray-400'>Normal</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop With Sidebar</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop With Category</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop Filters Top Bar</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop Wide</CustomeLink>
                  <CustomeLink className='text-gray-400'>My Account</CustomeLink>
              </div>
          </div>
          <div>
            <Title>Our Blog</Title>
              <div className='flex flex-col gap-4'>
                  <CustomeLink className='text-gray-400'>Normal</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop With Sidebar</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop With Category</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop Filters Top Bar</CustomeLink>
                  <CustomeLink className='text-gray-400'>Shop Wide</CustomeLink>
                  <CustomeLink className='text-gray-400'>My Account</CustomeLink>
              </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
