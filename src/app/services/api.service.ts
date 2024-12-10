import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base_url = "https://localhost:7203/";
  private UserLogin_url = "Login/AdminLogin";
  private GetBooksByAlphabet_url = "Books/GetBooksByAlphabet";

  constructor(private http: HttpClient) { }

  login(logindetails: any) {
    let obs = this.http.post(this.base_url + this.UserLogin_url, logindetails);
    return obs;
  }

  getBooksByAlphabet(alphabet: any) {
    let url = this.base_url + this.GetBooksByAlphabet_url + "?alphabet=" + alphabet;
    let obs = this.http.get<any>(url, alphabet);
    return obs;
  }
}
