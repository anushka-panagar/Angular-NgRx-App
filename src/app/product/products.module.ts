import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { productsRoutedComponents, ProductsRoutingModule } from "./products-routing.module";
import { ProductsService } from "./services/product.service";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { reducer } from "./store/products.reducer";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { ProductsEffects } from "./store/products.effects";

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([ProductsEffects]),
    ProductsRoutingModule
  ],
  declarations: [productsRoutedComponents],
  providers: [
    ProductsService
  ]
})
export class ProductsModule {
}
