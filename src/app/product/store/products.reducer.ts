import * as productAction from './products.actions';
import { createReducer, on } from "@ngrx/store";
import { Product } from "../model/product";


export interface ProductState {
}

export const initialState: ReadonlyArray<Product> = [];

export const reducer = createReducer(
  initialState,
  on(productAction.productsFetchAPISuccess, (state, { allProducts }) => {
    return allProducts;
  })
);
