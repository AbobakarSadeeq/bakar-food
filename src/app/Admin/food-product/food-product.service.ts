import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodProductService {

  constructor(private _Http:HttpClient) { }

  GetAll(): Observable<any> {
    return this._Http.get("https://localhost:44346/api/FoodProduct");
  }
  Insert(data: any) {
    return this._Http.post("https://localhost:44346/api/FoodProduct", data);
  }
  get(Id: any) {
    return this._Http.get("https://localhost:44346/api/FoodProduct" + '/' + Id);
  }
  DeleteData(Id: any) {
    return this._Http.delete("https://localhost:44346/api/FoodProduct" + '/' + Id);
  }
  UpdateData(data: any) {
    return this._Http.put("https://localhost:44346/api/FoodProduct", data);
  }
}
