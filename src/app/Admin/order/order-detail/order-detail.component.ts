import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { delay, Subscription } from 'rxjs';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  userOrderDetailData: any[] = [];

  totalPriceSingleOrder: number = 0;
  shippedDataShowning = true;
  orderAcceptedTime: any;

  subscription: Subscription;

  constructor(
    private _orderService: OrderService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {



    let selectedOrderDetailsAddress = this._activatedRoute.snapshot.params['address'];
    this.subscription = this._orderService.get(selectedOrderDetailsAddress).subscribe((dataResponse: any) => {
      this.userOrderDetailData = dataResponse;
      for (var cartItem of dataResponse) {
        this.totalPriceSingleOrder = this.totalPriceSingleOrder + cartItem.totalPrice;
      }
    })


    const getQueryParam = this._activatedRoute.snapshot.queryParamMap.get('orderStatus');
    if (getQueryParam == "shipped" || getQueryParam == "ClientPendding") {
      this.shippedDataShowning = false;
    }

    this.orderAcceptedTime = new Date();
  }

  confirmOrder(data: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Confirm this Order?',
      accept: () => {
        this.subscription = this._orderService.acceptOrder(data).pipe(delay(1000)).subscribe(() => {
          this._route.navigate(['/Admin/Orders']);
          this._orderService.orderConfirmMessage.next("Order has been confirm and shipped");
        })
      }
    });
  }



  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }


}
