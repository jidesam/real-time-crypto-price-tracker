import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
SelectedCurrency: string = "NGR"
  constructor() { }

  ngOnInit(): void {
  }
  sendCurrency(event:string){
    console.log(event)
  }

}
