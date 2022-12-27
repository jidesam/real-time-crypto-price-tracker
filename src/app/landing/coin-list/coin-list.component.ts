import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TrendingCoinsService } from 'src/app/service/trending-coins.service';
import { Router } from '@angular/router';
import { CurrencyService } from 'src/app/service/currency.service';


@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
 bannaData : any
 dataTable : any
 dataSource! :MatTableDataSource<any>
 displayedColumns: string[] = ['symbol', 'currentPrice', 'price_change_percentage_24h', 'Market_Cap'];
 @ViewChild(MatPaginator) paginator!: MatPaginator
 @ViewChild(MatSort) sort!: MatSort

  constructor(private coinService : TrendingCoinsService,
            private router : Router , private currencyService : CurrencyService ) { }
 p: number = 1;
  currency: string = 'USD'
  ngOnInit(): void {
    this.getBanner()
    this.getALlCOins()
    this.currencyService.getCurrency()
    .subscribe(val =>{
      this.currency = val
    })
  }
  getBanner(){
    this.coinService.getTrendingCurrency(this.currency)
    .subscribe(res =>{
     this.bannaData = res;
     this.getALlCOins();
     this.getBanner();
    })
  }
  getALlCOins(){
    this.coinService.getAllCOins(this.currency)
    .subscribe(res=>{
      this.dataSource =new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }
  applyFilter(event: Event){
    const FilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = FilterValue.trim().toLocaleLowerCase();
   if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }
details(row : any){
  this.router.navigate(['coin-details', row.id])
}

}
