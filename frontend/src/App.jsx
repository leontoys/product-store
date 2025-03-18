import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import "./styles.css"
import { ToastContainer, toast } from 'react-toastify';
import productService from "./services/product.service.js"

function App() {

  //Let App manage all products
  const [products, setProducts] = useState([])

  //onload-fetch products
  useEffect(() => {

    productService.getAll()
      .then((response) => {
        console.log("response", response.data)
        setProducts(response.data)
      })
      .catch((error) => {
        console.error(error.message)
      })

  }, [])


  //create new Product
  const addProduct = async (newProduct) => {
    console.log("new", newProduct)
    const response = await productService.create(newProduct)
    console.log("service-response", response.data)
    //success
    if (response.success) {
      toast.success("Product Created")
      setProducts([...products, response.data.data])//add new
    }//error
    else {
      toast.error("Error: Product NOT Created")
    }

  }

  const updateProduct = async(updatedProduct)=>{
    console.log("id to delete", updatedProduct._id)
    const response = await productService.updateItem(updatedProduct)
    //success
    if (response.success) {
      toast.success("Product Updated")
      let updatedProducts = products.map(product=> product._id === updatedProduct._id ? updatedProduct : product)
      setProducts(updatedProducts)//update items
    }//error
    else {
      toast.error("Error: Product NOT Updated")
    }
  }

  const deleteProduct = async(id)=>{
    console.log("id to delete", id)
    const response = await productService.deleteItem(id)
    //success
    if (response.success) {
      toast.success("Product Deleted")
      let updatedProducts = products.filter(product=> product._id !== id)
      setProducts(updatedProducts)//update items
    }//error
    else {
      toast.error("Error: Product NOT Deleted")
    }
  }

  return (
    <div className='app'>
      <Navbar /> {/**This will be displayed on all routes as it is above */}
      <Routes>
        <Route path='/' element={<HomePage products={products} 
                updateProduct={updateProduct} deleteProduct={deleteProduct} />}></Route>
        <Route path='/create' element={<CreatePage 
               addProduct={addProduct}/>}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  )
}

export default App
