import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crypto-community',
  templateUrl: './crypto-community.component.html',
  styleUrls: ['./crypto-community.component.css']
})
export class CryptoCommunityComponent {
  crypto_name = ""
  crypto_symbol = ""
  image_src = ""

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
          

          //community data
          let community_data = data["community_data"]
          let fb_likes = community_data["facebook_likes"]
          let tw_followers = community_data["twitter_followers"]
          let reddit_average_posts_48h = community_data["reddit_average_posts_48h"]
          let reddit_average_comments_48h = community_data["reddit_subscribers"]
          let reddit_accounts_active_48h = community_data["reddit_accounts_active_48h"]

          //developer data
          let developer_data = data["developer_data"]
          let forks = developer_data["forks"]
          let stars = developer_data["stars"]
          let subscribers = developer_data["subscribers"]
          let total_issues = developer_data["total_issues"]
          let closed_issues = developer_data["closed_issues"]


          let content = document.getElementsByTagName("mat-card-content")[0]

          content.innerHTML = `
          <h3>Community Data</h3>
          <p><span style="font-weight: bold;">Facebook likes:</span> ${fb_likes}</p>
          <p><span style="font-weight: bold;">Twitter followers: </span>${tw_followers}</p>
          <p><span style="font-weight: bold;">Reddit average comments 24h:</span> ${reddit_average_posts_48h}</p>
          <p><span style="font-weight: bold;">Reddit average comments 48h:</span>  ${reddit_average_comments_48h}</p>
          <p><span style="font-weight: bold;">Reddit accounts active 48h: </span>${reddit_accounts_active_48h}</p>

          <br>
          <br>
          
          <h3>Developer Data </h3>
          <p><span style="font-weight: bold;">Forks: </span>${forks}</p>
          <p><span style="font-weight: bold;">Stars: </span>${stars}</p>
          <p><span style="font-weight: bold;">Subscribers: </span>${subscribers}</p>
          <p><span style="font-weight: bold;">Total issues: </span>${total_issues}</p>
          <p><span style="font-weight: bold;">Closed issues: </span>${closed_issues}</p>
          `
        })
    });

  }
  

}
