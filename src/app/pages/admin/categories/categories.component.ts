import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categoryList:any[]=[]
  constructor(private productSrv:ProductService){
    this.getAllCategory();
  }
 
  getAllCategory() {
    this.productSrv.getCategory().subscribe((result: any) => {
      this.categoryList = result.data;
      console.log("lol", this.categoryList);
    });
  }
}
