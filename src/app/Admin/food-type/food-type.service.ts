import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class FoodTypeService {

  constructor(private _Http:HttpClient) { }


  GetAll(): Observable<any> {
    return this._Http.get("https://localhost:44346/api/FoodType");
  }
  Insert(data: any) {
    return this._Http.post("https://localhost:44346/api/FoodType", data);
  }
  get(Id: any) {
    return this._Http.get("https://localhost:44346/api/FoodType" + '/' + Id);
  }
  DeleteData(Id: any) {
    return this._Http.delete("https://localhost:44346/api/FoodType" + '/' + Id);
  }
  UpdateData(data: any) {
    return this._Http.put("https://localhost:44346/api/FoodType", data);
  }



}
