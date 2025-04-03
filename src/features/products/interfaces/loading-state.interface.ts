import { PayloadAction } from "@reduxjs/toolkit";
import { GeneralInitialState } from "../../../common/interfaces/general-initial-state";
import { ProductStats } from "./product-stats.interface";
import { Product } from "./product.interface";

export interface LoadingState {
    handle(state: GeneralInitialState<Product, ProductStats>, action?: PayloadAction<any>): void;
}
  