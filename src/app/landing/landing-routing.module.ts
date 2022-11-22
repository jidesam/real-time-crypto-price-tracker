import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinListComponent } from './coin-list/coin-list.component';
import { LandingComponent } from './landing.component';


const routes: Routes = [{ path: '', component: LandingComponent },
                      {path :'coin-list', component:CoinListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
