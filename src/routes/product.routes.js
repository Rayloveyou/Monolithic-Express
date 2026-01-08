"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const product_validator_1 = require("../validators/product.validator");
const router = (0, express_1.Router)();
router.post('/', product_validator_1.ProductValidator.validateCreateProduct, product_controller_1.ProductController.createProduct);
router.get('/', product_controller_1.ProductController.getAllProducts);
router.get('/:id', product_controller_1.ProductController.getProduct);
router.put('/:id', product_validator_1.ProductValidator.validateUpdateProduct, product_controller_1.ProductController.updateProduct);
router.delete('/:id', product_controller_1.ProductController.deleteProduct);
exports.default = router;
//# sourceMappingURL=product.routes.js.map