import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../model/product";

export const selectProducts = createFeatureSelector<Product[]>('products');

export const selectProductById = (productId: number) =>
  createSelector(selectProducts, (products: Product[]) => {
    const productById = products.find((product) => product.id == productId);
    if (!productById) {
      return null;
    }
    return productById;
  });
