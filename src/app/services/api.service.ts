import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Models/Book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private data: any = null;

  private base_url = "http://localhost:8080/";
  private userLogin_url = "Login/AdminLogin";
  private getBooksByAlphabet_url = "Books/GetBooksByAlphabet";
  private updateBooks_url = "Books/UpdateBook";

  constructor(private http: HttpClient) { }

  login(logindetails: any) {
    let obs = this.http.post(this.base_url + this.userLogin_url, logindetails);
    return obs;
  }

  getBooksByAlphabet(alphabet: any) {
    let url = this.base_url + this.getBooksByAlphabet_url + "?alphabet=" + alphabet;
    let obs = this.http.get<any>(url, alphabet);
    return obs;
  }

  setData(value: any) {
    this.data = value;
  }

  getData() {
    return this.data;
  }

  clearData() {
    this.data = null;
  }

  updateBooksCount(book: Book) {
    let obs = this.http.post(this.base_url + this.updateBooks_url, book);
    return obs;
  }
}
