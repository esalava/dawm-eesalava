/* const API_URL = "https://damp-beach-17296.herokuapp.com/https://api.coingecko.com/api/v3"

const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');


window.addEventListener('DOMContentLoaded', (event) => {
    fetch(`${API_URL}/coins/list?include_platform=false`)
    .then((response) => response.json())
    .then((cryptos) => {
        cryptos.forEach(crypto => {
            let trow = document.createElement('tr');
            let data_name = document.createElement('td');
            let data_symbol = document.createElement('td');
            data_name.append(document.createTextNode(`${crypto.name}`));
            data_symbol.append(document.createTextNode(`${crypto.symbol}`));

            trow.appendChild(data_name)
            trow.appendChild(data_symbol)
            HTMLResponse.appendChild(trow);
        })
        //HTMLResponse.appendChild(ul);
    })
    .catch(error => {
        console.log("An error has ocurred")
    })

});


 */