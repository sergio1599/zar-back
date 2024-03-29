import { Router } from "express";
import {
    createProduct,
    getProduct,
    getProducts,
    getProductByCategory,
    getProductBySubCategory,
    updateProduct,
    deleteProduct
} from '../controller/product';

const router = Router();

router.post('/new-product', createProduct);
router.get('/get-products', getProducts);
router.get('/get-product/:code', getProduct);
router.get('/get-by-category/:category', getProductByCategory);
router.get('/get-by-subcategory/:subcategory', getProductBySubCategory);
router.put('/update-product/:code', updateProduct);
router.delete('/delete-product/:code', deleteProduct);


export { router as product };