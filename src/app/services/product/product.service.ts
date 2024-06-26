import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
   
  }
  getCategory(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }
  getProduct(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT);
  }
  // saveProduct(obj:any){
  //   return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,obj);
  // }
  saveProduct(obj: any) {
    return this.http.post<any>(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT, obj);
  }
  
  updateProduct(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT,obj);
  }
  deleteProduct(productId: any){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + productId);
  }
  getAllProductByCategoryId(categoryId: any){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT_BY_CATEGORY_ID + categoryId);
  }
  addToCart(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_TO_CART,obj);
  }
  GetCartProductsByCustomerId( CustId: number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_CART_PRODUCTS_BY_CUSTOMER_ID + CustId);
  }
  deleteProductFromCartById(productId: number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT_FROM_CART_BY_ID + productId);
  }
  getProductById(productId:number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_PRODUCT_BY_ID + productId);
  }
}
