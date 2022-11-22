import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { CoinListComponent } from './coin-list/coin-list.component';

import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LandingComponent,
    CoinListComponent,
    CoinDetailComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  
  ]
})
export class LandingModule { }
