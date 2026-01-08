import { Request, Response, NextFunction } from 'express';
import { Product } from '../models/product.model';
import { CreateProductDTO } from '../types/product.types';

export class ProductController {
  // Create product
  static async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, quantity }: CreateProductDTO = req.body;

      const product = await Product.create({ name, quantity });

      res.status(201).json({
        success: true,
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all products
  static async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Product.find().sort({ createdAt: -1 });

      res.status(200).json({
        success: true,
        count: products.length,
        data: products,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get single product
  static async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }

      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update product
  static async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }

      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete product
  static async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }

      res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
      });
    } catch (error) {
      next(error);
    }
  }
}
