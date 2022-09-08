import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from "../services/product.service";
import * as productAction from './products.action';
import { catchError, concatMap, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/reducers";

@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions,
    private store: Store<AppState>,
    private productService: ProductsService) {
  }

  getAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productAction.invokeProductsAPI),
      switchMap(() => this.productService.getAllProducts()),
      map((data) => productAction.productsFetchAPISuccess({ allProducts: data })),
      catchError((err) => [productAction.productsFetchAPIError(err)])
    )
  );


}
