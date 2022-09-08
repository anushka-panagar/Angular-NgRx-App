import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsComponent } from "./products.component";

export const productRoutes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    { path: '', component: ProductsListComponent },
    { path: 'detail/:id', component: ProductDetailComponent },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}

export const productsRoutedComponents = [
  ProductsComponent,
  ProductsListComponent,
  ProductDetailComponent
];
