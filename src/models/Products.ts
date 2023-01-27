import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces";


const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
        default: ''
    },
    description: {
        type: String,
        required: true,
        default: ''
    },
    urlImage: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['iron', 'steel'],
        required: true,
        default: 'iron'
    },
    subcategory: {
        type: String,
        enum: ['doors', 'windows'],
        required: true,
        default: 'doors'
    }
}, {
    timestamps: true
});

const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);


export default Product;