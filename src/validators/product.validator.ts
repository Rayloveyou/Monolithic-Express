import { Request, Response, NextFunction } from 'express';

export class ProductValidator {
  static validateCreateProduct(req: Request, res: Response, next: NextFunction) {
    const { name, quantity } = req.body;
    const errors: string[] = [];

    // Validate name
    if (!name || typeof name !== 'string') {
      errors.push('Name is required and must be a string');
    } else if (name.trim().length === 0) {
      errors.push('Name cannot be empty');
    } else if (name.length > 100) {
      errors.push('Name is too long (max 100 characters)');
    }

    // Validate quantity
    if (quantity === undefined || quantity === null) {
      errors.push('Quantity is required');
    } else if (typeof quantity !== 'number') {
      errors.push('Quantity must be a number');
    } else if (!Number.isInteger(quantity)) {
      errors.push('Quantity must be an integer');
    } else if (quantity < 0) {
      errors.push('Quantity cannot be negative');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    next();
  }

  static validateUpdateProduct(req: Request, res: Response, next: NextFunction) {
    const { name, quantity } = req.body;
    const errors: string[] = [];

    // Validate name if provided
    if (name !== undefined) {
      if (typeof name !== 'string') {
        errors.push('Name must be a string');
      } else if (name.trim().length === 0) {
        errors.push('Name cannot be empty');
      } else if (name.length > 100) {
        errors.push('Name is too long (max 100 characters)');
      }
    }

    // Validate quantity if provided
    if (quantity !== undefined) {
      if (typeof quantity !== 'number') {
        errors.push('Quantity must be a number');
      } else if (!Number.isInteger(quantity)) {
        errors.push('Quantity must be an integer');
      } else if (quantity < 0) {
        errors.push('Quantity cannot be negative');
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    next();
  }
}
