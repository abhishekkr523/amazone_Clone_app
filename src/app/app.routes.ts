import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { Component } from '@angular/core';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { SellerAuthComponent } from './pages/admin/seller-auth/seller-auth.component';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './pages/admin/home/home.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { CartComponent } from './pages/admin/cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [

    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'categoryProduct/:id',
                component: CategoryProductComponent,
            },

            {
                path: 'login',
                component: SellerAuthComponent
            },
            {
                path: 'products',
                component: ProductsComponent,
                canActivate: [authGuard]
            },
            {
                path: 'categories',
                component: CategoriesComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'productdetails/:productId',
                component: ProductDetailsComponent
            },
        ]
    },



];
