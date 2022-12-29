import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CryptoSummaryComponent } from './components/crypto-summary/crypto-summary.component';
import { CryptoSquareComponent } from './components/crypto-square/crypto-square.component';
import { CryptoCommunityComponent } from './components/crypto-community/crypto-community.component';
import { CryptoStatComponent } from './crypto-stat/crypto-stat.component';

const routes: Routes = [
  {path: "index", component: CryptoSquareComponent},
  { path : "about/:id", component : CryptoSummaryComponent },
  { path: "stats/:id", component : CryptoStatComponent },
  {path: "community/:id", component :CryptoCommunityComponent},
  { path: "**", redirectTo: "index"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
