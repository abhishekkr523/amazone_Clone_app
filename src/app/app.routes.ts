import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { Component } from '@angular/core';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { SellerAuthComponent } from './pages/admin/seller-auth/seller-auth.component';

export const routes: Routes = [
   
    
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ProductsComponent
            },
            {
                path: 'login',
                component: SellerAuthComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'categories',
                component: CategoriesComponent
            },
        ]
    },
    


];
