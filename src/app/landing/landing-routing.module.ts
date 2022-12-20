import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { LandingComponent } from './landing.component';


const routes: Routes = [{ path: '', component: CoinListComponent  },
                      {path :'coin-list', component:CoinListComponent },
                    {path:'coin-details', component: CoinDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
