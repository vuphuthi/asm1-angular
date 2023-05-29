import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm = this.formBuilder.group({
    name: ['',[Validators.required,Validators.minLength(4)]],
    price: [0]
  })
  constructor(private formBuilder: FormBuilder,
  private productService: ProductService ){}
  onHandleSubmit(){
  const product: Iproduct= {
    name: this.productForm.value.name || "",
    price: this.productForm.value.price || 0,
  }
  this.productService.addProduct(product).subscribe((product)=>{
    console.log(product)
  })
  }
}
