import { Component, OnInit } from '@angular/core';
import { RecursosService } from 'src/app/servicios/recursos.service';
import { Crypto } from 'src/app/interfaz/crypto';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-crypto-square',
  templateUrl: './crypto-square.component.html',
  styleUrls: ['./crypto-square.component.css']
})
export class CryptoSquareComponent implements OnInit {
  cryptos: Crypto[]=[]; //Arreglo del nombre de las criptomonedas
  myControl = new FormControl('');
  options: Crypto[] = [];
  filteredOptions!: Observable<Crypto[]>;
  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): Crypto[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  
  constructor(private recursosServices: RecursosService){
    recursosServices.obtenerDatos().subscribe(respuesta => { 
      //TODO: cambiar esta parte
      localStorage.setItem("criptomonedas", JSON.stringify(respuesta))

      let criptomonedas = JSON.parse(localStorage.getItem("criptomonedas")!)
      if (criptomonedas){
        this.options = (criptomonedas as Crypto[])
      }
    })  
  }
}
