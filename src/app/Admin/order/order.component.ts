import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  penddingOrders: any[] = [];
  onTabChangeOrder: any;
  subscription: Subscription;

  shippedOrder: any[] = [];
  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {
    this.subscription = this._orderService.GetAll().subscribe((orderDataResponse: any) => {
      for (var singleOrder of orderDataResponse) {

        if (singleOrder.orderStatus == 'Pending') {
          if (this.penddingOrders.filter(a => a.fullAddress == singleOrder.fullAddress).length == 0) {
            this.penddingOrders.push(singleOrder);
          }
        } else if (singleOrder.orderStatus == 'Shipped') {
          if (this.shippedOrder.filter(a => a.fullAddress == singleOrder.fullAddress).length == 0) {
            this.shippedOrder.push(singleOrder);
          }
        }
      }
    })

  }

  public tabChanged(tabChangeEvent: any): void {
    console.log(tabChangeEvent.index);
  }
}
