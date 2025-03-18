import Product from "../models/product.model.js"//path to model 
import mongoose from "mongoose";

export const getProducts = async (req,res)=>{
    console.log("get all products")
    try {
        const response = await Product.find({})
        res.status(200).json({status:true,data:response})
        
    } catch (error) {
        console.error("Error getting product",error.message)
        res.status(500).json({status:false,message:"Server Error"})
    }
}

export const createProduct = async (req,res)=>{
    //get body
    const product = req.body

    //validation
    if(!product.name|| !product.price || !product.image){
        res.status(400).json({status:false,message:"Please enter all fields"})
    }

    //create new product
    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({status:true,data:newProduct})
        
    } catch (error) {
        console.error("Error creating product",error.message)
        res.status(500).json({status:false,message:"Server Error"})
    }
}

export const updateProduct = async (req,res)=>{

    //get id
    const {id} = req.params
    console.log("id",id)
    //get body
    const product = req.body

    //validation
    if(!mongoose.Types.ObjectId.isValid(id)){
        req.status(404).json({status:false,message:"Invalid Product Id"})
    }

    try {
        const newProduct = await Product.findByIdAndUpdate(id,product,{new:true})//to get updated product
        res.status(200).json({status:true,data:newProduct})
        
    } catch (error) {
        console.error("Error updating product",error.message)
        res.status(500).json({status:false,message:"Server Error"})
    }
}

export const deleteProduct = async (req,res)=>{

    //get id
    const {id} = req.params

    //validation
    if(!mongoose.Types.ObjectId.isValid(id)){
        req.status(404).json({status:false,message:"Invalid Product Id"})
    }

    try {
        await Product.findByIdAndDelete(id)//to get updated product
        res.status(200).json({status:true,message:"Product Deleted"})
        
    } catch (error) {
        console.error("Error Deleting product",error.message)
        res.status(500).json({status:false,message:"Server Error"})
    }
}