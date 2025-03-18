import axios from 'axios'
import { data } from 'react-router-dom'
const baseUrl = '/api/products'

const create = async (newProduct)=>{

        console.log("service",newProduct)
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false, message:"Please fill all fields"}
        }
    	//call axios
        try {
            const response = await axios.post(baseUrl,newProduct)
            return {success:true, data:response.data}

        } catch (error) {
            console.error("Error",error.message)            
            return {success:false, message:error.message}

        }
}

const getAll = async()=>{

    //call axios
    try {
        const response = await axios.get(baseUrl)
        const data = response.data.data
        return {success:true, message:"Products fetched Successfully", data:data}

    } catch (error) {
        console.error("Error",error.message)            
        return {success:false, message:error.message}

    }
}

const deleteItem = async (id)=>{

    console.log("item to delete",id)
    //call axios
    try {
        await axios.delete(`${baseUrl}/${id}`,id)
        return {success:true, message : "Product Deleted"}

    } catch (error) {
        console.error("Error",error.message)            
        return {success:false, message:error.message}

    }
}

export default {
    create,
    getAll,
    deleteItem
}