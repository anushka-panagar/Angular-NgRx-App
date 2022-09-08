import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Product } from '../model/product';
import { selectProductById } from "../store/products.selector";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    let fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.store.pipe(select(selectProductById(id)));
      })
    );
    fetchData$.subscribe((data: Product) => {
      if (data) {
        this.product = data;
      }
      else {
        this.router.navigate(['/']);
      }
    });
  }

}
