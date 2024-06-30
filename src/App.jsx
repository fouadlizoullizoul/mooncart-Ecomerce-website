import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/common/Header"
import Layout from "./Components/common/Layout"
import Home from "./screen/home/Home"
import Shop from "./shop/Shop"
import ProductDeatils from "./screen/home/product/ProductDeatils"
import CartPage from "./screen/home/CartPage"

function App() {
    return (
      <div>
       
          <Routes>
              <Route  
              path="/" 
              element={
              <Layout>
                <Home/>
              </Layout>
              }/>
               <Route  
              path="/shop" 
              element={
              <Layout>
                <Shop/>
              </Layout>
              }/>
               <Route  
              path="/product-details/:productId" 
              element={
              <Layout>
                <ProductDeatils/>
              </Layout>
              }/>
              <Route  
              path="/cart" 
              element={
              <Layout>
                <CartPage/>
              </Layout>
              }/>
          </Routes>
        
      </div>
    )
  
}

export default App
