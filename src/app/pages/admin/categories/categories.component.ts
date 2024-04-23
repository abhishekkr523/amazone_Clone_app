import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categoryList:any[]=[]
  constructor(private productSrv:ProductService,private router:Router){
    this.getAllCategory();
  }
 
  getAllCategory() {
    this.productSrv.getCategory().subscribe((result: any) => {
      this.categoryList = result.data;
      console.log("lol", this.categoryList);
    });
  }

  navigateToProduct(id:number) {
    console.log("pp",id)
    this.router.navigate(['/categoryProduct',id])
}
}
