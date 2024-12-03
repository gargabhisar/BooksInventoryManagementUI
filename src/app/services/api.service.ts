import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base_url = "https://localhost:7203/";
  private UserLogin_url = "Login/AdminLogin";

  constructor(private http: HttpClient) { }

  login(logindetails: any) {
    let obs = this.http.post(this.base_url + this.UserLogin_url, logindetails);
    return obs;
  }
}
