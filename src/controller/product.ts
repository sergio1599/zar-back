import { Request, Response } from "express";
import { v4 as uuid } from 'uuid';
import Product from '../models/Products';


export const createProduct = async (req: Request, res: Response) => {
    const { name, description, urlImage, category, subCategory } = req.body;

    try {
        const product = new Product({
            code: uuid(),
            name,
            description,
            urlImage,
            category,
            subCategory
        });

        await product.save();
        return res.status(201).json({
            success: true,
            message: 'Product created successfully'
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}