let ids = ["bitcoin", "ethereum", "cardano", "stellar"];
const API_URL = `https://api.coingecko.com/api/v3/coins/`;
//https://damp-beach-17296.herokuapp.com/

window.addEventListener("DOMContentLoaded", (event) => {
  //obtenerPrecioEnFecha("20-12-2020");
  //obtenerPreciosHistoricos("bitcoin");
});

let obtenerPrecioEnFecha = async (opcion) => {
  //lista_post = [3.727, 3.818, 1.455, 6.917];
  //lista_simbolos = ["BTC", "ETHER", "ADA", "XML"];
  lista_post = [];
  lista_simbolos = [];

  ids.forEach((id) => {
    fetch(`${API_URL}${id}/history?date=20-12-2020&localization=false`)
      .then((response) => response.json())
      .then((cryptoinfo) => {
        let dato = cryptoinfo["community_data"][opcion];
        console.log(dato);
        let simbolo = cryptoinfo["symbol"];
        lista_post.push(dato);
        lista_simbolos.push(simbolo)
      })
      .catch((error) => {
        console.log("An error has ocurred");
      });
  });
  
  //console.log([1,2,34])
  function testAsync(){
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        setTimeout(()=>{
            console.log("Hello from inside the testAsync function");
            resolve();
        ;} , 5000
        );
    });
}
await testAsync();

  let sum =  lista_post.reduce((previous, current) => (current += previous));
  let chart = document.querySelector("#chart-content");

  console.log(lista_simbolos)
  for (let i = 0; i < lista_post.length; i++) {
    let percentage = lista_post[i] / sum;
    console.log(percentage);
    chart.innerHTML += `<th scope="row"> ${lista_simbolos[i]}</th> <td style="--size:${percentage};"></td>`;
  }
};

let obtenerPreciosHistoricos = (coin) => {
  
  fetch(`${API_URL}${coin}/market_chart/range?vs_currency=usd&from=1606712022&to=1638248022`)
          .then((response) => response.json())
          .then((cryptoinfo) => {
            let chart_precio_historico = document.querySelector("#chart-content-price");
            let precios_historicos = cryptoinfo["prices"]
            //let precios_historicos = [0.19, 0.23, 0.28, 0.40, 0.36, 0.34, 0.46, 0.51, 0.44]
            for(let i = 0; i<precios_historicos.length-20; i+=20){
              let div = 0
              if(coin == "bitcoin") {
                div = 100000
              } else if (coin == "ethereum"){
                div = 10000
              } else if (coin == "cardano"){
                div = 10
              } else {
                div = 1
              }
              precio_ant = precios_historicos[i][1]/div  
              precio_post = precios_historicos[i+20][1]/div//${precios_historicos[i + 1]}
              chart_precio_historico.innerHTML += `<tr><td style="--start:${precio_ant};  --size: ${precio_post}"> <span class="data"></span> </td></tr>`;

            }
           
          })
          .catch((error) => {
            console.log("An error has ocurred");
          }); 
};

let btn_consultar_reddit = document.querySelector(".chart-comentario-btn-1");
btn_consultar_reddit.addEventListener("click", () => {
  let seleccion_reddit = document.querySelector("#seleccion_reddit").value;
  let caption_reddit = document.querySelector("#caption-reddit")
  if (seleccion_reddit == 1) {
   
    caption_reddit.innerHTML = "Reddit Avg comments 48h"
    obtenerPrecioEnFecha("reddit_average_comments_48h");
  } else if (seleccion_reddit == 2) {
    caption_reddit.innerHTML = "Reddit Avg posts 48h"
    obtenerPrecioEnFecha("reddit_average_posts_48h");
  }
});

let btn_clear_reddit = document.querySelector(".chart-comentario-btn-2");
btn_clear_reddit.addEventListener("click", () => {
  //se limpia la tabla
  let tabla_reddit = document.querySelector("#chart-content");
  tabla_reddit.innerHTML = "";
});

let btn_price_cryp = document.querySelector(".chart-price-btn-1");
btn_price_cryp.addEventListener("click", () => {
  let seleccion_cryp = document.querySelector("#seleccion_precio").value;
  let caption_precio = document.querySelector("#caption-price")
  if(seleccion_cryp == 1){
    caption_precio.innerHTML = "Historical BTC data from 2020 11 30 - 2021 11 30"
    obtenerPreciosHistoricos("bitcoin");
    
  } else if (seleccion_cryp == 2){
    caption_precio.innerHTML = "Historical ETH data from 2020 11 30 - 2021 11 30"
    obtenerPreciosHistoricos("ethereum");
  } else if(seleccion_cryp == 3){
    caption_precio.innerHTML = "Historical ADA data from 2020 11 30 - 2021 11 30"
    obtenerPreciosHistoricos("cardano");
  } else {
    caption_precio.innerHTML = "Historical XML data from 2020 11 30 - 2021 11 30"
    obtenerPreciosHistoricos("stellar");
  }
});

let btn_clear_price = document.querySelector(".chart-price-btn-2");
btn_clear_price.addEventListener("click", () => {
  //se limpia la tabla
  let tabla_reddit = document.querySelector("#chart-content-price");
  tabla_reddit.innerHTML = "";
});

seleccion_reddit.options[Selection.selectedIndex];
let seleccion_precio = document.getElementById("seleccion_precio");
