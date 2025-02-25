import { Base } from "../../../common/interfaces/base.interface";
import { StatusActiveEnum } from "../../../constants/app.constant";


export interface Product extends Base<string>{
    title: string;
    description: string;
    thumbnail: string;
    price: number;
    discountPercentage: number;
    status: StatusActiveEnum;
    images: string[];
    slug: string;
    category: Record<string, unknown>;
}