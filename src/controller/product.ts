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

export const getProducts = async (_req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        if (!products) return res.status(400).json({
            success: false,
            message: 'Products not found'
        })

        return res.status(200).json({
            products
        })
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getProduct = async (req: Request, res: Response) => {
    const { code } = req.params;
    try {
        const product = await Product.findOne({ code });
        if (!product) return res.status(400).json({
            success: false,
            message: 'Product not found'
        });
        return res.status(200).json({
            product
        })

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { code } = req.params;
        /* const { name, description, urlImage, category, subCategory } = req.body; */
        const product = await Product.findOneAndUpdate({ code }, req.body, { new: true });
        if (!product) return res.status(400).json({
            success: false,
            message: 'Product not found'
        });
        return res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            product
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { code } = req.params;
        const product = await Product.findOneAndDelete({ code });
        if (!product) return res.status(400).json({
            success: false,
            message: 'Product not found'
        });
        return res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
