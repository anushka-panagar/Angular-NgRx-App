import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../model/product";

@Injectable()
export class ProductsService {

  http: HttpClient;
  apiUrl = 'https://random-data-api.com/api/coffee/random_coffee?size=50'


  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllProducts(params?: any): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, { params });
  }
}
