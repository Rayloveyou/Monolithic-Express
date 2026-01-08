import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';
import { ProductValidator } from '../validators/product.validator';

const router = Router();

router.post(
  '/',
  ProductValidator.validateCreateProduct,
  ProductController.createProduct
);

router.get('/', ProductController.getAllProducts);

router.get('/:id', ProductController.getProduct);

router.put(
  '/:id',
  ProductValidator.validateUpdateProduct,
  ProductController.updateProduct
);

router.delete('/:id', ProductController.deleteProduct);

export default router;
