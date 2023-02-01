import { Component , AfterViewInit, ViewChild} from '@angular/core';
import { RecursosService } from '../recursos.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface Product {
  productName: string,
  productLine: string,
  priceEach: number,
  customerNumber: number,
  status: string
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent{
  displayedColumns: string[] = ['productName','productLine', 'priceEach'];
  products: MatTableDataSource<Product> = new MatTableDataSource();


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private recursosService: RecursosService) {
    recursosService.getAllProducts().subscribe(response =>{
      this.products = new MatTableDataSource (response as Array<Product>)
      this.products.paginator = this.paginator;
    } )
    
  }
}
