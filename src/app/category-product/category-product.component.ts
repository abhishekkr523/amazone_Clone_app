import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-product.component.html',
  styleUrl: './category-product.component.scss'
})
export class CategoryProductComponent {
  CategoryId: any;
  categoryProduct: any;

  constructor(private activatedRout: ActivatedRoute, private productSrv: ProductService) {

    this.activatedRout.params.subscribe((result) => {
      // debugger;
      this.CategoryId = result['id'];
      console.log("CategoryId", this.CategoryId)
      this.productSrv.getAllProductByCategoryId(this.CategoryId).subscribe((result: any) => {
        this.categoryProduct = result.data;
        console.log("categoryProduct", this.categoryProduct)
      })
    })
  }


}
