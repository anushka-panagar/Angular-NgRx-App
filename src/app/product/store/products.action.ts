import { createAction, props } from "@ngrx/store";
import { Product } from "../model/product";

export const invokeProductsAPI = createAction(
  '[Products API] Invoke Products Fetch API'
);

export const productsFetchAPISuccess = createAction(
  '[Products API] Fetch API Success',
  props<{ allProducts: Product[] }>()
);

export const productsFetchAPIError = createAction(
  '[Products API] Fetch API Error',
  props<{ error: any }>()
);






