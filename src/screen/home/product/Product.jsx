import { BodyOne, Title } from "../../../Components/common/CustomComponents"
import ProductCard from "../../../Components/product/ProductCard"
import { productlists } from "../../../assets/Data/db"

const Product = () => {
  return (
    <div>
     <section className="py-20 bg-white-100">
        <div className="container">
            <Title level={4}>Most Popular Products</Title>
            <div className="flex items-center gap-[1rem] uppercase">
              <BodyOne className="text-sm">All Products (39)</BodyOne>
              <BodyOne className="text-sm text-primary-green">Wooden Product (15)</BodyOne>
            </div>
            <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                {productlists.map((product)=>(
                  <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  images={product.images}
                  color={product.color}
                  discount={product.discount}
                  rating={product.rating}
                  featured={product.featured}
                  description={product.description}
                  category={product.category}
                  />
                ))}
            </div>
        </div>
    </section>   
    </div>
    
  )
}

export default Product
