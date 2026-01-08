import { Request, Response, NextFunction } from 'express';
export declare class ProductValidator {
    static validateCreateProduct(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
    static validateUpdateProduct(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
}
//# sourceMappingURL=product.validator.d.ts.map