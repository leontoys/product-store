import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Modal from "./Modal";
import { useEffect, useState } from "react";

const ProductCard = (props)=>{
    const {name,image,price,_id} = props.product
    const {deleteProduct,updateProduct} = props 
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [updatedProduct,setUpdatedProduct] = useState(props.product)

    console.log("delete",typeof deleteProduct)

    const handleEdit = ()=>{
        //this will set the state variable to true
        //so the compenent will re-render
        //then the dialog will open
        setIsModalOpen(true)
    }

    const handleDelete = ()=>{
        console.log("id",_id)
        deleteProduct(_id)
    }
    
    const onClose = (e)=>{
        e.preventDefault()
        setIsModalOpen(false)
    }

    const handleUpdate = (e)=>{
        e.preventDefault()
        //call App method to update
        updateProduct(updatedProduct)
        setIsModalOpen(false)
    }

    return(
    <div className="product-card">
        <img src={image}/>
        <p>{name}</p>
        <p>{price}</p>
        <span className="edit-delete">
            <button className="edit" onClick={handleEdit}><FaRegEdit /></button>
            <button className="delete" onClick={handleDelete}><MdDeleteForever /></button>
        </span>
        <Modal isOpen={isModalOpen} onClose={onClose}>
        <form className="create-form"> 
                        <h1>Update Product</h1>
                        <div className="create-form-name">
                            <label>Name:</label>
						    <input
							    placeholder='Product Name'
							    name='name'
							    value={updatedProduct.name}
							    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
						    />
                        </div>
                        <div className="create-form-price">
                            <label>Price:</label>
						    <input
							    placeholder='Price'
							    name='price'
							    type='number'
							    value={updatedProduct.price}
							    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
						    /> 
                        </div>
                        <div className="create-form-url">
                            <label>Image:</label>
						    <input
							    placeholder='Image URL'
							    name='image'
							    value={updatedProduct.image}
							    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
						    />
                        </div>
                        <div className="modal-footer">
						    <button onClick={handleUpdate}>Update Product</button>
                            <button onClick={onClose}>Cancel</button>                            
                        </div>                                                
                    </form>
        </Modal>
    </div>)
}

export default ProductCard