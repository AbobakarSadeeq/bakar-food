import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _Http:HttpClient) { }


  get(Id: any) {
    return this._Http.get("https://localhost:44346/api/Order" + '/' + Id);
  }


  GetAll(): Observable<any> {
    return this._Http.get("https://localhost:44346/api/Order");
  }

  acceptOrder(data:any){
    return this._Http.put("https://localhost:44346/api/Order/" + data, null);
  }

  orderConfirmMessage = new Subject<string>();
}
