import ProductCard from "../components/ProductCard"

const HomePage = (props)=>{
    const  {products, deleteProduct, updateProduct } = props
    return(
    <div className="home-page">
        <h1>Current Products 🚀</h1>
        <div className="product-list">
            {products.map((product)=>(< ProductCard key={product._id} product={product}
            deleteProduct={deleteProduct} updateProduct={updateProduct}/>))}
        </div>
    </div>)
}

export default HomePage