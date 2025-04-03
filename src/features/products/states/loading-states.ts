
import { PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../interfaces/loading-state.interface";
import { GeneralInitialState } from "../../../common/interfaces/general-initial-state";
import { Product } from "../interfaces/product.interface";
import { ProductStats } from "../interfaces/product-stats.interface";
import { LoadingConstant } from "../../../constants/loading.constant";

export class PendingState implements LoadingState {
  handle(state: GeneralInitialState<Product, ProductStats>) {
    state.loading = LoadingConstant.PENDING;
    state.error = null;
  }
}

export class SucceededState implements LoadingState {
  handle(state: GeneralInitialState<Product, ProductStats>, action: PayloadAction<any>) {
    state.loading = LoadingConstant.SUCCEEDED;
    state.items = action.payload.items || state.items;
    state.item = action.payload.item || state.item;
    state.stats = action.payload.stats || state.stats;
    state.pagination = action.payload.pagination || state.pagination;
  }
}

export class FailedState implements LoadingState {
  handle(state: GeneralInitialState<Product, ProductStats>, action: PayloadAction<any>) {
    state.loading = LoadingConstant.FAILED;
    state.error = action.payload || "An error occurred";
  }
}
