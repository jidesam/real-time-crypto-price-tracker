import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { CoinListComponent } from './coin-list/coin-list.component';

import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { SharedModule } from '../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatMenuModule} from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';



@NgModule({
  declarations: [
    LandingComponent,
    CoinListComponent,
    CoinDetailComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    MatTableModule,
    NgxPaginationModule,
    MatMenuModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    NgChartsModule,
  
  ]
})
export class LandingModule { }
