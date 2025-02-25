import { LoadingConstant } from "../../constants/loading.constant";
import { Pagination } from "./pagination.interface";

export interface GeneralInitialState<T> {
    pagination: Pagination | null;
    items: T[];
    item: T | null;
    loading: LoadingConstant;
    error: string | null;

}