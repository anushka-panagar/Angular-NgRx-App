import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { Product } from "../model/product";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import { selectProducts } from "../store/products.selectors";
import { ProductState } from "../store/products.reducer";


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductsListComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['blend', 'origin'];
  public productTotal: number;
  public noData: Product[] = [<Product>{}];

  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private router: Router,
    private store: Store<ProductState>,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  public ngAfterViewInit(): void {
    this.loadProducts();
    this.paginator.pageIndex = 0;
  }

  loadProducts() {
    this.store.select(selectProducts).subscribe((products) => this.initializeData(products));
  }

  private initializeData(products: Product[]): void {
    this.dataSource = new MatTableDataSource(
      products.length ? products : this.noData
    );
    this.dataSource.paginator = this.paginator;
    this.cdr.detectChanges();
  }

  selectedProduct(row: Product) {
    this.router.navigateByUrl(`/products/detail/${row.id}`);
  }


}
