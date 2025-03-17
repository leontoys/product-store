import express, { Router } from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../controller/product.controller.js";

//router
const router = express.Router()

//GET ALL
router.get("/",getProducts)

//POST
router.post("/", createProduct)

//PUT
router.put("/:id",updateProduct)

//DELETE
router.delete("/:id",deleteProduct)

export default router //export this and not Router