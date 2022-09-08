import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../reducers";
import { invokeProductsAPI, productsFetchAPIError } from "./store/products.action";
// import { getProductError, getProductsError } from "./store/products.reducer";

@Component({
  selector: 'app-products',
  template: `
    <router-outlet></router-outlet>`
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(invokeProductsAPI());
    this.store.select(productsFetchAPIError);
  }

  loadingError(error: Error) {
    if (error) {
      alert('Error while loading the list of products');
    }
  }

}
