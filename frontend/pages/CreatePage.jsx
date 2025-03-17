import { useState } from "react";
// Importing toastify module
import { ToastContainer, toast } from 'react-toastify';

const CreatePage = ()=>{
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

    const handleAddProduct = async (event) => {
        event.preventDefault()
        toast.success('🦄 Wow so easy!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            });
    }

	return (    <div className="create">
                    <form className="create-form">
                        <h1>Create New Product</h1>
                        <div className="create-form-name">
                            <label>Name:</label>
						    <input
							    placeholder='Product Name'
							    name='name'
							    value={newProduct.name}
							    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						    />
                        </div>
                        <div className="create-form-price">
                            <label>Price:</label>
						    <input
							    placeholder='Price'
							    name='price'
							    type='number'
							    value={newProduct.price}
							    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						    /> 
                        </div>
                        <div className="create-form-url">
                            <label>Image:</label>
						    <input
							    placeholder='Image URL'
							    name='image'
							    value={newProduct.image}
							    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						    />
                        </div>                                                
						<button type="submit" onClick={handleAddProduct}>
							Add Product
						</button>
                    </form>
                    <ToastContainer/>
                    </div>
	);    
}

export default CreatePage