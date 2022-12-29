import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crypto-summary',
  templateUrl: './crypto-summary.component.html',
  styleUrls: ['./crypto-summary.component.css']
})
export class CryptoSummaryComponent {
  crypto_name = ""
  crypto_symbol = ""
  image_src = ""
  //current_price = ""
  //price_change_24h  = ""
  description!:HTMLElement;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      let link = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
      fetch(link)
        .then(response => response.json())
        .then(data => {
          this.crypto_name =  data["name"];
          this.crypto_symbol = data["symbol"].toUpperCase();
          this.image_src = data["image"]["small"];
          let tmp_description = data["description"]["en"];
          let content = document.getElementsByTagName("mat-card-content")[0]
          if (tmp_description == "") {
            content.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id erat id odio posuere pellentesque. Donec et turpis id dolor consectetur iaculis aliquet vel velit. Nam bibendum tincidunt est aliquam tincidunt. Proin euismod orci non venenatis vulputate. Phasellus pharetra lacinia nisl, ut auctor magna venenatis nec. Donec tincidunt nisl quis felis egestas pulvinar. Aliquam maximus ullamcorper felis eu tempor. Vestibulum lacinia sit amet tortor ac mattis. Proin viverra dignissim nisi eget feugiat. Nunc et neque nisl."
          } else {
            content.innerHTML = tmp_description
          }
        })
    });

  }
}
