import ProductCard from "../Components/product/ProductCard"
import { productlists } from "../assets/Data/db"

const Shop = () => {
  return (
    <>
        <section className="mt-36 gap-7 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
        </section>
    </>
  )
}

export default Shop
