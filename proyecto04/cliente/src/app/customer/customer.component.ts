import { Component } from '@angular/core';
import { RecursosService } from '../recursos.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products/products.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  displayedColumns: string[] = ['productName','productLine', 'priceEach','customerNumber', 'status'];
  productos: Product[] = [];
  totalSale: number = 0;

  constructor(private recursosService: RecursosService,private route: ActivatedRoute ) {
    this.route.params.subscribe(params => {
      let customerNumber = params['id']; //se obtiene el número del cliente

      //se obtiene los productos por el cliente especificado
      recursosService.getShippedProductsFrom(customerNumber).subscribe(response => {
        
        this.productos = Object.values(response) as Array<Product>;
        console.log(this.productos)
        recursosService.getTotalFrom(this.productos).subscribe(res => {
          //console.log(res)
          this.totalSale = Object.values(res)[0];
        })
      })
      
    })
  }
}
