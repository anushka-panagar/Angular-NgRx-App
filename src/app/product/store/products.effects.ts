import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from "../services/product.service";
import * as productAction from './products.actions';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { ProductState } from "./products.reducer";
import { select, Store } from "@ngrx/store";
import { selectProducts } from "./products.selectors";

@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions,
    private store: Store<ProductState>,
    private productService: ProductsService) {
  }
  /*
  Load the Products using NgRx Effects using Products Store
  - Is there is data in the Product Store do not load by making a service / API call.
  */
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productAction.invokeProductsAPI),
      withLatestFrom(this.store.pipe(select(selectProducts))),
      mergeMap(([, productsFromStore]) => {
        if (productsFromStore.length > 0) {
          return [];
        }
        return this.productService
          .getAllProducts()
          .pipe(map((data) => productAction.productsFetchAPISuccess({ allProducts: data })),
            catchError((err) => [productAction.productsFetchAPIError(err)])
          );
      })
    )
  );

}
