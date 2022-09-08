import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../model/product";

//  Product Selector is used to fetch all the data from our Products module.

// Here the name of our selector 'products' is used to register the 'productReducer'
// into the 'products.module.ts' to register the feature store or child store.
export const selectProducts = createFeatureSelector<Product[]>('products');

export const selectProductById = (productId: number) =>
  createSelector(selectProducts, (products: Product[]) => {
    const productById = products.find((product) => product.id == productId);
    if (!productById) {
      return null;
    }
    return productById;
  });
