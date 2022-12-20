import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TrendingCoinsService } from 'src/app/service/trending-coins.service';

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

  constructor(private coinService : TrendingCoinsService) { }
 p: number = 1;
  ngOnInit(): void {
    this.getBanner()
    this.getALlCOins()
  }
  getBanner(){
    this.coinService.getTrendingCurrency("USD")
    .subscribe(res =>{
     this.bannaData = res
    })
  }
  getALlCOins(){
    this.coinService.getAllCOins('USD')
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

  announceSortChange(event: Event){}
}
