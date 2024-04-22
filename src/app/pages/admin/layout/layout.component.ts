import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoriesComponent } from "../categories/categories.component";
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [
        RouterOutlet,
        CategoriesComponent,
        RouterLink,
        CommonModule
    ]
})
export class LayoutComponent {
    categoryList: any[] = [];
    constructor(private productSrv: ProductService) {
        this.getAllCategory()
    }
    getAllCategory() {
        this.productSrv.getCategory().subscribe((result: any) => {
            this.categoryList = result.data;
            console.log("lkl", this.categoryList);
        });
    }
}
