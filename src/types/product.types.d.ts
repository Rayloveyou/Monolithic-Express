export interface IProduct {
    name: string;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface CreateProductDTO {
    name: string;
    quantity: number;
}
export interface UpdateProductDTO {
    name?: string;
    quantity?: number;
}
//# sourceMappingURL=product.types.d.ts.map