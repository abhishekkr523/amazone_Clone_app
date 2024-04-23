import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productsList: any;

  constructor(private productSrv:ProductService){
this. getProducts()
  }

  getProducts() {
    this.productSrv.getProduct().subscribe((res: any) => {
      this.productsList = res.data;
      console.log("productsList", this.productsList)
    });
  }
}
