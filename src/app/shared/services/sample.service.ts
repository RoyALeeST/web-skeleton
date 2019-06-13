import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }
 
  public getData(): any {
    return [
      {name: 'Link', dateOfBirth: '11/11/11', address: 'Some description'},
      {name: 'Zelda', dateOfBirth: '12/12/12', address: 'Some description'},
      {name: 'Ganondorf', dateOfBirth: '10/11/12', address: 'Some description'},
    ];
  }

    /**
     * Fetch a customer from server using his id as search parameter
     * @param {string} customerId No params
     * @return {Observable} found customer
     */
    public getCustomerById(customerId: string): Observable<any>{
      return this.http.get(`api/v1/customers/get/${customerId}`) 
    }

      /**
     * Fetch all customers from db
     * @param {none} none No params
     * @return {Observable} found customers
     */
    public getCustomers(): Observable<any>{
      return this.http.get(`api/v1/customers/get/all`) 
    }
}
