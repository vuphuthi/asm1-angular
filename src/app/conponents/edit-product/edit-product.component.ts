import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  product! : Iproduct
  productForm = this.formBuilder.group({
    name: ['',[Validators.required,Validators.minLength(4)]],
    price: [0]
  })
  constructor(private formBuilder: FormBuilder,
  private productService: ProductService ,
  private router: ActivatedRoute){
    this.router.paramMap.subscribe((params => {
        
      const id = Number(params.get('id'));
      this.productService.getProduct(id).subscribe(data => {
        this.product = data;

        this.productForm.patchValue({

          name: data.name,
          price: data.price
        })
      }, error => console.log(error.message))
    }))
  }
  onHandleSubmit(){
    if (this.productForm.valid){
      const product: Iproduct ={
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0
      }
      this.productService.updateProduct(product).subscribe((product)=>{
        console.log(product);
      })
    }
  }
}
