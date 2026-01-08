import { Request, Response, NextFunction } from 'express';
export declare class ProductController {
    static createProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getAllProducts(req: Request, res: Response, next: NextFunction): Promise<void>;
    static getProduct(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static updateProduct(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static deleteProduct(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=product.controller.d.ts.map