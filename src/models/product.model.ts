import mongoose, { Schema, Document } from 'mongoose';
import { IProduct } from '../types/product.types';

export interface IProductDocument extends IProduct, Document {}

const productSchema = new Schema<IProductDocument>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      minlength: [1, 'Product name cannot be empty'],
      maxlength: [100, 'Product name too long'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity cannot be negative'],
      validate: {
        validator: Number.isInteger,
        message: 'Quantity must be an integer',
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model<IProductDocument>('Product', productSchema);
