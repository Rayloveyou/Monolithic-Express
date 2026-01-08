import mongoose, { Document } from 'mongoose';
import { IProduct } from '../types/product.types';
export interface IProductDocument extends IProduct, Document {
}
export declare const Product: mongoose.Model<IProductDocument, {}, {}, {}, mongoose.Document<unknown, {}, IProductDocument, {}, mongoose.DefaultSchemaOptions> & IProductDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IProductDocument>;
//# sourceMappingURL=product.model.d.ts.map