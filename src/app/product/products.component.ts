import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { invokeProductsAPI } from "./store/products.actions";
import { ProductState } from "./store/products.reducer";

@Component({
  selector: 'app-products',
  template: `
    <router-outlet></router-outlet>`
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<ProductState>) {
  }

  ngOnInit() {
    this.store.dispatch(invokeProductsAPI());
  }

  loadingError(error: Error) {
    if (error) {
      alert('Error while loading the list of products');
    }
  }

}
