import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './conponents/list-product/list-product.component';
import { AddProductComponent } from './conponents/add-product/add-product.component';
import { EditProductComponent } from './conponents/edit-product/edit-product.component';

const routes: Routes = [
  {path: '', component: ListProductComponent},
  {path: 'add', component: AddProductComponent},
  {path: 'product/:id/edit', component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
