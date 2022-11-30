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
  /* fetch(`${API_URL}${coin}/market_chart/range?vs_currency=usd&from=1606712022&to=1638248022`)
          .then((response) => response.json())
          .then((cryptoinfo) => {

            //let precios_historicos = cryptoinfo["prices"]
            let precios_historicos = [0.19, 0.23, 0.28, 0.40, 0.36, 0.34, 0.46, 0.51, 0.44]
            for(let i = 0; i<precios_historicos.length; i+=10){
                precio = precios_historicos[i][1]
                console.log(precio/100000)
            }
           
          })
          .catch((error) => {
            console.log("An error has ocurred");
          }); */

  let precios_historicos = [
    0.19, 0.23, 0.28, 0.4, 0.36, 0.34, 0.46, 0.51, 0.44,
  ];

  let chart_precio_historico = document.querySelector("#chart-content-price");
  for (let i = 0; i < precios_historicos.length - 1; i++) {
    precio = precios_historicos[i];
    console.log(precio);
    chart_precio_historico.innerHTML += `<tr>
    <td style="--start:${precios_historicos[i]};  --size: ${
      precios_historicos[i + 1]
    } "> <span class="data"> ${precios_historicos[i + 1]}</span> </td>
  </tr>`;
  }
};

let btn_consultar_reddit = document.querySelector(".chart-comentario-btn-1");
btn_consultar_reddit.addEventListener("click", () => {
  let seleccion_reddit = document.querySelector("#seleccion_reddit").value;

  if (seleccion_reddit == 1) {
    obtenerPrecioEnFecha("reddit_average_comments_48h");
  } else if (seleccion_reddit == 2) {
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
  obtenerPreciosHistoricos("bitcoin");
});

let btn_clear_price = document.querySelector(".chart-price-btn-2");
btn_clear_price.addEventListener("click", () => {
  //se limpia la tabla
  let tabla_reddit = document.querySelector("#chart-content-price");
  tabla_reddit.innerHTML = "";
});

seleccion_reddit.options[Selection.selectedIndex];
let seleccion_precio = document.getElementById("seleccion_precio");
