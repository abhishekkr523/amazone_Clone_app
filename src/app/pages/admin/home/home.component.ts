import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productsList: any;
  productObj={
    "CartId": 0,
    "CustId": 379,
    "ProductId": "",
    "Quantity": 1,
    "AddedDate": "2024-04-24T01:09:55.544Z"
  }

  constructor(private productSrv:ProductService,private router:Router){
this. getProducts()
  }

  getProducts() {
    this.productSrv.getProduct().subscribe((res: any) => {
      this.productsList = res.data;
      console.log("productsList", this.productsList)
    });
  }
  addToCart(s:any){
    console.log("mm",s)
    this.productObj.ProductId = s;
    this.productSrv.addToCart(this.productObj).subscribe((res: any) => {
      debugger;
      if (res) {
        alert("save successful.");
        // this.getProducts();
        console.log("jj", res)
      } else {
        alert("An error occurred.");
      }
    }) 
  }

  getProductIdForViewProduct(productId:number){
this.router.navigate(['/productdetails',productId])
  }
}
