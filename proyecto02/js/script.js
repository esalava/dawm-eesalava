let ids = ["bitcoin", "ethereum", "cardano", "stellar"];
const API_URL = `https://api.coingecko.com/api/v3/coins/`;
//https://damp-beach-17296.herokuapp.com/

window.addEventListener("DOMContentLoaded", (event) => {
  //obtenerPrecioEnFecha("20-12-2020");
  //obtenerPreciosHistoricos("bitcoin");
});

let obtenerPrecioEnFecha = (fecha) => {
  lista_post = [3.727, 3.818, 1.455, 6.917];
  lista_simbolos = ["BTC", "ETHER", "ADA", "XML"];
  /* ids.forEach((id) => {
        fetch(`${API_URL}${id}/history?date=${fecha}&localization=false`)
          .then((response) => response.json())
          .then((cryptoinfo) => {
            let posts = cryptoinfo["community_data"]["reddit_average_posts_48h"]
            let simbolo = cryptoinfo["symbol"]
            console.log(posts)
            lista_post.push(posts)
           
          })
          .catch((error) => {
            console.log("An error has ocurred");
          });
      }); */
  let sum = lista_post.reduce((previous, current) => (current += previous));
  //let avg = sum / lista_post.length;
  let chart = document.querySelector("#chart-content");

  for (let i = 0; i < lista_post.length; i++) {
    let percentage = lista_post[i] / sum;
    console.log(percentage);
    chart.innerHTML += `<th scope="row"> ${lista_simbolos[i]}</th> <td style="--size:${percentage};"></td>`;
    //`<tr><th scope="row">${lista_simbolos[i]}</th><td style="--size: ${percentage}" ></td></tr>`
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

  let precios_historicos = [0.19, 0.23, 0.28, 0.4, 0.36, 0.34, 0.46, 0.51, 0.44];

  let chart_precio_historico = document.querySelector("#chart-content-price")
  for (let i = 0; i < precios_historicos.length-1; i++) {
    precio = precios_historicos[i];
    console.log(precio);
    chart_precio_historico.innerHTML += `<tr>
    <td style="--start:${precios_historicos[i]};  --size: ${precios_historicos[i+1]} "> <span class="data"> ${precios_historicos[i+1]}</span> </td>
  </tr>`
  }

};

let btn_consultar_reddit = document.querySelector(".chart-comentario-btn-1")
btn_consultar_reddit.addEventListener("click", () => {obtenerPrecioEnFecha("20-12-2020")});


let btn_clear_reddit = document.querySelector(".chart-comentario-btn-2")
btn_clear_reddit.addEventListener("click", () => {
  //se limpia la tabla
  let tabla_reddit = document.querySelector("#chart-content")
  tabla_reddit.innerHTML = ""
});

let btn_price_cryp = document.querySelector(".chart-price-btn-1")
btn_price_cryp.addEventListener("click", () => {obtenerPreciosHistoricos("bitcoin")});

let btn_clear_price = document.querySelector(".chart-price-btn-2")
btn_clear_price.addEventListener("click", () => {
  //se limpia la tabla
  let tabla_reddit = document.querySelector("#chart-content-price")
  tabla_reddit.innerHTML = ""
});