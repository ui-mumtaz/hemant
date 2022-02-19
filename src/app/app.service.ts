import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck, tap } from "rxjs/operators";

const APP_URL = "http://localhost:3000";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private _http: HttpClient) {}

  getDistrict() {
    return this._http.get(`${APP_URL}/district`);
  }

  saveEmployee(obj) {
    return this._http.put(`${APP_URL}/employee`, obj);
    //return this._http.post(`${APP_URL}/employee`, obj)
  }

  getVillage() {
    return this._http.get(`${APP_URL}/village`);
  }

  getCity() {
    return this._http.get(`${APP_URL}/citizen`);
  }

  search(term: string, id: any) {
    return this._http.get(`${APP_URL}/village`, {
      params: {
        districtId: id,
        q: term
      },
    })
  }
}
