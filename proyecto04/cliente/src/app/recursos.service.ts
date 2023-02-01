import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient) { }

  getAllClients() {
    return this.http.get('http://localhost:8010/proxy/customers/findAll/json')
  }

  getAllProducts(){
    return this.http.get('http://localhost:8010/proxy/customers/sales')
  }

  getShippedProductsFrom(customerNumber: number){
    return this.http.get(`http://localhost:8010/proxy/customers/shipped/${customerNumber}`)
  }

  getTotalFrom(itemsArray:Product[] ){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(itemsArray);
    return this.http.post('http://localhost:8010/proxy/customers/total', body, {'headers': headers})
  }
}
