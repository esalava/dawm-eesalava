import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoSquareComponent } from '../components/crypto-square/crypto-square.component';

@Component({
  selector: 'app-crypto-stat',
  templateUrl: './crypto-stat.component.html',
  styleUrls: ['./crypto-stat.component.css']
})
export class CryptoStatComponent {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let coin = params['id'];
      let link = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=usd&from=1574312230&to=1669006630`

      fetch(link)
          .then((response) => response.json())
          .then((cryptoinfo) => {
            let chart_precio_historico = document.querySelector("#chart-content-price");
            let table_caption = document.querySelector("caption")
            let card_title = document.querySelector("mat-card-title")
            let card_content  = document.querySelector("mat-card-content")
            card_title!.innerHTML = coin.toUpperCase()
            table_caption!.innerHTML = `Price of ${coin} from 20/11/2019 - 20/11/2022`
            let prices = cryptoinfo["prices"]
            let precios_historicos = [] //contiene todos los precios historicos
            let precios_historicos_ant = [] //arreglo que contiene el precio historico anterior
            let precios_historicos_post = [] //arreglo que contiene el precio historico posterior

            for(let i = 0; i<prices.length-20; i+=20){
              let precio_ant = prices[i][1]
              let precio_post = prices[i+20][1]
              precios_historicos.push(precio_ant)
              precios_historicos.push(precio_post)
              precios_historicos_ant.push(precio_ant)
              precios_historicos_post.push(precio_post)

              //if(chart_precio_historico){
              // chart_precio_historico.innerHTML += `<tr><td style="--start:${precio_ant};  --size: ${precio_post}"> <span class="data"></span> </td></tr>`;
              //}xs

            }
            var max_price = precios_historicos_ant.reduce(function(a,b) {
              return Math.max(a,b);
            }, -Infinity)


            console.log(max_price);
            console.log(precios_historicos_ant)
            //se divide para el factor de conversión mayor (precio anterior)
            precios_historicos_ant = precios_historicos_ant.map(function(v) {
              return v / max_price;
            });

            //se divide para el factor de conversión mayor (precio posterior)
            precios_historicos_post = precios_historicos_post.map(function(v) {
              return v / max_price;
            });

            for(let i = 0; i<precios_historicos_ant.length; i++){
              let precio_hist_ant = precios_historicos_ant[i]
              let precio_hist_post = precios_historicos_post[i]

              if(chart_precio_historico){
                  chart_precio_historico.innerHTML += `<tr><td style="--start:${precio_hist_ant};  --size: ${precio_hist_post}"> <span class="data"></span> </td></tr>`;
                }
            }
           
          })
          .catch((error) => {
            console.log("An error has ocurred");
          }); 

          //TODO: Hacer otra petición fetch para mostrar el cambio del precio, el precio actualmente, etc. Relacionadas a las estadisticas de la criptomoneda. Usar: https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&market_data=true
    })

  }

}
