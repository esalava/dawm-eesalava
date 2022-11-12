const API_URL = "https://damp-beach-17296.herokuapp.com/https://api.coingecko.com/api/v3"

const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch(`${API_URL}/coins/list?include_platform=false`)
    .then((response) => response.json())
    .then((cryptos) => {
        cryptos.forEach(crypto => {
            let elem = document.createElement('li');
            elem.append(document.createTextNode(`${crypto.name}`));
            ul.appendChild(elem);
        });

        HTMLResponse.appendChild(ul);
    })