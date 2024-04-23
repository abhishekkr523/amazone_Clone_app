import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  isEditMode: boolean = false;
  addEdit: boolean = false;
  productObj: any = {
    "ProductId": 0,
    "ProductSku": "",
    "ProductName": "",
    "ProductPrice": 0,
    "ProductShortName": "",
    "ProductDescription": "",
    "CreatedDate": new Date(),
    "DeliveryTimeSpan": "",
    "CategoryId": 56,
    "ProductImageUrl": ""
  }
  categoryList: any[] = [];
  productsList: any[] = []
  dataFromDialog: any;

  constructor(private productSrv: ProductService, public dialog: MatDialog,) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
    console.log("ll", this.categoryList);
    console.log("ll", this.productsList)
  }


  openSidePanel() {
    this.isSidePanelVisible = true
  }

  addProductThroughDialog(): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      width: '500px',
      disableClose: true,
      data: {
        categoryList: this.categoryList,
        isEditMode: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataFromDialog = result;
      console.log("formDataAtProductPage", this.dataFromDialog);

      this.productObj.ProductSku = this.dataFromDialog.productSku;
      this.productObj.ProductName = this.dataFromDialog.productName;
      this.productObj.ProductPrice = this.dataFromDialog.productPrice;
      this.productObj.ProductShortName = this.dataFromDialog.productShortName;
      this.productObj.ProductDescription = this.dataFromDialog.productDescription;
      this.productObj.DeliveryTimeSpan = this.dataFromDialog.deliveryTimeSpan;
      // this.productObj.CategoryId = this.dataFromDialog.categoryId;
      this.productObj.ProductImageUrl = this.dataFromDialog.productImageUrl;
      
      console.log("productObj", this.productObj)


      setTimeout(() => {
        this.onSave()
      }, 3000)
    });


  }


  onSave() {
    console.log("llbb", this.productObj);
    this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
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


  closeSidePanel() {
    this.isSidePanelVisible = false
  }

  onSubmit() {

  }

  getProducts() {
    this.productSrv.getProduct().subscribe((res: any) => {
      this.productsList = res.data;
      console.log("productsList", this.productsList)
    });
  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((result: any) => {
      this.categoryList = result.data;
      console.log("categoryList", this.categoryList);
    });
  }
  // getAllCategory() {
  //   this.productSrv.getCategory().subscribe((result: any) => {
  //     this.categoryList = result.data;
  //     console.log("lkl", this.categoryList);
  //   });
  // }


  onUpdate() {
    this.productSrv.updateProduct(this.productObj).subscribe((res: any) => {
      debugger;
      if (res) {
        alert("Update successfull.");
        this.getProducts();
        console.log("jj", res)
      } else {
        alert("An error occur.");
      }
    })
    this.isSidePanelVisible = false;
  }
  

  deleteProduct(obj: any) {
    console.log("kk", obj.productId)
    this.productSrv.deleteProduct(obj.productId).subscribe((res) => {
      debugger;
      if (res) {
        alert("Delete successfull.");
        this.getProducts();
        console.log("response", res)
      } else {
        alert("An error occur.");
      }
    })
  }
  editProduct(item: any) {
    this.productObj = item;
    this.isSidePanelVisible = true
  }
  editProductThroughDialog(item: any): void {
    this.productObj = item;
    const dialogRef = this.dialog.open(AddEditComponent, {
      width: '500px',
      disableClose: true,
      data: {
        categoryList: this.categoryList,
        item: item,
        isEditMode: true
      }

      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataFromDialog = result;
      console.log("formDataAtProductPage", this.dataFromDialog);

      this.productObj.ProductSku = this.dataFromDialog.productSku;
      this.productObj.ProductName = this.dataFromDialog.productName;
      this.productObj.ProductPrice = this.dataFromDialog.productPrice;
      this.productObj.ProductShortName = this.dataFromDialog.productShortName;
      this.productObj.ProductDescription = this.dataFromDialog.productDescription;
      this.productObj.DeliveryTimeSpan = this.dataFromDialog.deliveryTimeSpan;
      // this.productObj.CategoryId = this.dataFromDialog.categoryId;
      this.productObj.ProductImageUrl = this.dataFromDialog.productImageUrl;
      console.log("productObj", this.productObj)

      setTimeout(() => {
        this.onUpdate()
      }, 3000)
      
    });


  }

}
