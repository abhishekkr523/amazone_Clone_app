import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  productList: any;

  constructor(private productSrv: ProductService) {
    this.getProductsByCustomerId();
  }
  getProductsByCustomerId(id=379) {
    this.productSrv.GetCartProductsByCustomerId(id).subscribe((result:any) => {
      // debugger
      console.log("jjj", result.data)
      this.productList = result.data
    })
  }
  deleteProductFromCartById(productId:any){
    console.log("id",productId)
    this.productSrv.deleteProductFromCartById(productId).subscribe((result)=>{
      // debugger;
      this.getProductsByCustomerId()
    })
  }
}
