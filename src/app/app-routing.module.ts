import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // Client Sides Routes
    { path: '', loadChildren: () => import('./Client/home/home.module').then(m => m.HomeModule) },
    { path: 'About', loadChildren: () => import('./Client/about/about.module').then(m => m.AboutModule) },
    { path: 'Galary', loadChildren: () => import('./Client/galary/galary.module').then(m => m.GalaryModule) },
    { path: 'Location', loadChildren: () => import('./Client/location/location.module').then(m => m.LocationModule) },
    { path: 'Cart', loadChildren: () => import('./Client/cart/cart.module').then(m => m.CartModule) },
    { path: 'Menu', loadChildren: () => import('./Client/food-menu/food-menu.module').then(m => m.FoodMenuModule) },
    { path: 'FoodProduct/Detail/:id', loadChildren: () => import('./Client/food-menu/food-menu-detail/food-menu-detail.module').then(m => m.FoodMenuDetailModule) },

    { path: 'Admin', loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule) },
    { path: 'FoodType', loadChildren: () => import('./Admin/food-type/food-type.module').then(m => m.FoodTypeModule) },
    { path: 'FoodProduct', loadChildren: () => import('./Admin/food-product/food-product.module').then(m => m.FoodProductModule) },
    { path: 'Admin/Orders', loadChildren: () => import('./Admin/order/order.module').then(m => m.OrderModule) },
    { path: 'Admin/OrderDetails/:address', loadChildren: () => import('./Admin/order/order-detail/order-detail.module').then(m => m.OrderDetailModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
