import * as productAction from './products.action';
import { createReducer, on } from "@ngrx/store";
import { Product } from "../model/product";

// export class AppAction {
//   type: string;
//   payload?: any;
// }

// export interface State {
//   data: Product[];
//   selected: Product;
//   action: string;
//   done: boolean;
//   error?: Error;
// }

// const initialState: State = {
//   data: [],
//   selected: null,
//   action: null,
//   done: false,
//   error: null
// };

// export function reducer(state = initialState, action: AppAction): State {
//   switch (action.type) {
//     /*************************
//    * GET all products actions
//    ************************/
//     case productAction.GET_PRODUCTS:
//       return {
//         ...state,
//         action: productAction.GET_PRODUCTS,
//         done: false,
//         selected: null,
//         error: null
//       };
//     case productAction.GET_PRODUCTS_SUCCESS:
//       return {
//         ...state,
//         data: action.payload,
//         done: true,
//         selected: null,
//         error: null
//       };
//     case productAction.GET_PRODUCTS_ERROR:
//       return {
//         ...state,
//         done: true,
//         selected: null,
//         error: action.payload
//       };

//     /*************************
//    * GET product by id actions
//    ************************/
//     case productAction.GET_PRODUCT:
//       return {
//         ...state,
//         action: productAction.GET_PRODUCT,
//         done: false,
//         selected: null,
//         error: null
//       };
//     case productAction.GET_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         selected: action.payload,
//         done: true,
//         error: null
//       };
//     case productAction.GET_PRODUCT_ERROR:
//       return {
//         ...state,
//         selected: null,
//         done: true,
//         error: action.payload
//       };
//   }
//   return state;
// }

// export const getProductsState = createFeatureSelector<State>('products');

// export const getAllProducts = createSelector(getProductsState, (state: State) => state.data);

// export const getProductsError = createSelector(getProductsState, (state: State) => {
//   return state.action === productAction.GET_PRODUCTS
//     ? state.error
//     : null;
// });
// export const getProduct = createSelector(getProductsState, (state: State) => {
//   if (state.action === productAction.GET_PRODUCT && state.done) {
//     return state.selected;
//   } else {
//     return null;
//   }

// });

// export const getProductError = createSelector(getProductsState, (state: State) => {
//   return state.action === productAction.GET_PRODUCT
//     ? state.error
//     : null;
// });

// export const selectProductById = (productId: number) =>
//   createSelector(getAllProducts, (products: Product[]) => {
//     const productById = products.find((product) => +(product.id) == productId);
//     if (!productById) {
//       return null;
//     }
//     return productById;
//   });
export const initialState: ReadonlyArray<Product> = [];

export const reducer = createReducer(
  initialState,
  on(productAction.productsFetchAPISuccess, (state, { allProducts }) => {
    return allProducts;
  })
);
