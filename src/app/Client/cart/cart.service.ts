import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemsNumber = new Subject<number>();

  constructor(private _Http:HttpClient) { }




  Insert(data: any) {
    return this._Http.post("https://localhost:44346/api/Order", data);
  }






}
