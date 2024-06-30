import { promotionalInfo } from "../../assets/Data/db"
import { BodyOne, Title } from "../common/CustomComponents"

const Banner = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between pt-20">
        {promotionalInfo.map((info) =>(
            <>
                <div className="box relative  w-full" key={info.id}>
                    <div className="w-full h-[45vh] opacity-90">
                        <img src={info.image} alt="" className="w-full opacity-95 h-full object-cover"/>
                    </div>
                    <div className="absolute top-0 left-0 p-3 md:p-8 lg:w-2/3">
                        <span className="bg-white px-6 py-2 text-sm">{info.title}</span>
                        <Title level={2} className='my-5'>{info.title}</Title>
                        <BodyOne className='text-white'>{info.description}</BodyOne>
                        <button className="secondary-btn">SHOP NOW</button>
                    </div>
                </div>
            </>
        ))}
      </section>
    </>
  )
}

export default Banner
