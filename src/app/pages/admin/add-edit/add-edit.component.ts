import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-add-edit',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule, MatCardModule, MatSelectModule, CommonModule],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditComponent implements OnInit {
  category: any;
  productsList: any[] = [];
  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  }
  isEditModeData: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("dataa", data);
    this.isEditModeData=data
    this.initializeProduct();
  }
  ngOnInit(): void {

    // this.category = this.data.categoryList;
    // this.productObj = this.data.item;
    this.productObj = { ...this.productObj, ...this.data.item };
    this.category = this.data.categoryList;
    

    console.log("ookk", this.category)
    console.log("formdata", this.productObj)
    // this.Add();
  }
  initializeProduct(): void {
    this.productObj = {
      "productId": 0,
      "productSku": "",
      "productName": "",
      "productPrice": 0,
      "productShortName": "",
      "productDescription": "",
      "createdDate": new Date(),
      "deliveryTimeSpan": "",
      "categoryId": 0,
      "productImageUrl": ""
    };
  }
  Add(Sdata: any) {
    console.log("op", Sdata)
  }


  // getProducts() {
  //   this.productSrv.getProduct().subscribe((res: any) => {
  //     this.productsList = res.data;
  //     console.log("llpp", this.productsList)
  //   });
  // }
  // onSave() {
  //   this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
  //     debugger;
  //     if (res) {
  //       alert("save successfull.");
  //       // this.getProducts();
  //       console.log("jj", res)
  //     } else {
  //       alert("An error occur.");
  //     }
  //   })
  // }
}
