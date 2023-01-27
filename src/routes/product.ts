import { Router } from "express";
import { createProduct } from "../controller/product";

const router = Router();

router.post('/new-product', createProduct);


export { router as product };