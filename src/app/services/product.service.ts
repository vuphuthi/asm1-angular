import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://localhost:3000/products')
  }
  getProduct(id:number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`http://localhost:3000/products/${id}`)
  }
  deleteProduct(id:number): Observable<Iproduct> {
    return this.http.delete<Iproduct>(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product : Iproduct): Observable<Iproduct> {
    return this.http.patch<Iproduct>(`http://localhost:3000/products/${product.id}`,product)
  }
  addProduct(product : Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(`http://localhost:3000/products`,product)
  }
}
