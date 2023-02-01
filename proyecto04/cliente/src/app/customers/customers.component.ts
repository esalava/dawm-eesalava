import { Component } from '@angular/core';
import { RecursosService } from '../recursos.service';

export interface Customer {
  customerNumber: number
  customerName: string,
  contactLastName: string,
  addressLine1: string,
  creditLimit: string
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers: Customer[] = [];
  constructor(private recursosService: RecursosService) {

    recursosService.getAllClients().subscribe(response =>{
      this.customers = response as Array<Customer>
    })
  }
}
