import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products! : Iproduct[]

  constructor(private productService: ProductService){
    this.productService.getProducts().subscribe(data=>{
      this.products = data
    })
  }
  onhandleRemove(id:number){
    this.productService.deleteProduct(id).subscribe(()=>{
      this.products = this.products.filter(product=>product.id !== id)
    })
  }
}
