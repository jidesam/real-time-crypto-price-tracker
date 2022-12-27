import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/service/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
SelectedCurrency: string = "USD"
  constructor( private currency: CurrencyService) { }

  ngOnInit(): void {
  }
  sendCurrency(event:string){
   this.currency.setCurrency(event)
  }

}
