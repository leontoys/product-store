import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const ProductCard = (props)=>{
    const {name,image,price,_id} = props.product
    const {deleteProduct} = props 

    console.log("delete",typeof deleteProduct)

    const handleEdit = (id)=>{
        
    }

    const handleDelete = ()=>{
        console.log("id",_id)
        deleteProduct(_id)
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
    </div>)
}

export default ProductCard