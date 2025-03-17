import axios from 'axios'
import { data } from 'react-router-dom'
const baseUrl = '/api/products'

const create = async (newProduct)=>{

        console.log("service",newProduct)
        if(!newProduct.name || !newProduct.price || !newProduct.url){
            return {success:false, message:"Please fill all fields"}
        }
    	//call axios
        try {
            const response = await axios.post(baseUrl,newProduct)
            return {success:true, message:"Product Created Successfully", data:response.data}
   
        } catch (error) {
            console.error("Error",error.message)            
            return {success:false, message:error.message}

        }
}

export default {
    create,
}