import { createAction, props } from "@ngrx/store";
import { Product } from "../model/product";

// Actions dispatched /raised  by the components
// Source components name in the actions string for logging and debugging purposes
export const invokeProductsAPI = createAction(
  '[Product] Invoke Products Fetch API'
);

export const productsFetchAPISuccess = createAction(
  '[Products API] Fetch API Success',
  props<{ allProducts: Product[] }>()
);

export const productsFetchAPIError = createAction(
  '[Products API] Fetch API Error',
  props<{ error: Error }>()
);






