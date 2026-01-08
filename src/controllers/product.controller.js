"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const express_1 = require("express");
const product_model_1 = require("../models/product.model");
const product_types_1 = require("../types/product.types");
class ProductController {
    // Create product
    static async createProduct(req, res, next) {
        try {
            const { name, quantity } = req.body;
            const product = await product_model_1.Product.create({ name, quantity });
            res.status(201).json({
                success: true,
                data: product,
            });
        }
        catch (error) {
            next(error);
        }
    }
    // Get all products
    static async getAllProducts(req, res, next) {
        try {
            const products = await product_model_1.Product.find().sort({ createdAt: -1 });
            res.status(200).json({
                success: true,
                count: products.length,
                data: products,
            });
        }
        catch (error) {
            next(error);
        }
    }
    // Get single product
    static async getProduct(req, res, next) {
        try {
            const product = await product_model_1.Product.findById(req.params.id);
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
        }
        catch (error) {
            next(error);
        }
    }
    // Update product
    static async updateProduct(req, res, next) {
        try {
            const product = await product_model_1.Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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
        }
        catch (error) {
            next(error);
        }
    }
    // Delete product
    static async deleteProduct(req, res, next) {
        try {
            const product = await product_model_1.Product.findByIdAndDelete(req.params.id);
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
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map