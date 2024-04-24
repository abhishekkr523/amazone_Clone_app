import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productId: any;
  Product: any;
  constructor(private activatedRout: ActivatedRoute, private productSrv: ProductService) {
    this.activatedRout.params.subscribe((result) => {
      debugger;
      this.productId = result;
      console.log("CategoryIddd", result)
      this.getProduct()
    })
  }
  getProduct() {
    this.productSrv.getProductById(this.productId).subscribe((result: any) => {
      debugger;
      this.Product = result.data;
      console.log("Product", this.Product)
    })
  }

}
