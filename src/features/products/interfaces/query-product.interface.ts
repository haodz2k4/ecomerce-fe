import { BaseQuery } from "../../../common/interfaces/base-query.interface";


export interface QueryProduct extends BaseQuery {
    minPrice?: number;
    maxPrice?: number;
}