import { Component, OnInit, ViewChild } from '@angular/core';
import { TrendingCoinsService } from 'src/app/service/trending-coins.service';
import { ActivatedRoute } from '@angular/router';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {
  coinData : any
  coinId! : string
  days : number = 30
  currency : string = 'USD'
  coinDetails! : string

  public lineChartData : ChartConfiguration['data'] = {
    datasets: [
      {
        data : [],
        label : 'price trends',
        backgroundColor: 'rgba(148, 159, 177, 0.2)',
        borderColor:'#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor:'#009688',
        pointHoverBackgroundColor: '#009688',
        pointHoverBorderColor:'#009688'
      }
    ],
    labels: []
  };
  public lineChartOptions : ChartConfiguration['options']={
    elements: {
      point: {
        radius: 1
      }
    },
    plugins: {
      legend : {display : true},
    }
  };
  public LineChartType : ChartType= 'line';

  @ViewChild(BaseChartDirective) myLineChat! : BaseChartDirective

  constructor(private service : TrendingCoinsService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
   
     this.activatedRoute.params.subscribe(
    val =>{
      this.coinId = val['id'];
    }
   )
    this.getCoinData()
    this.getGraphData()
  }
  getCoinData(){
  this.service.getCurrencyById(this.coinId)
  .subscribe(res =>{
    this.coinData = res
   

   
  })
  }

 getGraphData(){
  this.service.getGraphicalCurrencyData(this.coinId, 'USD', 30)
  .subscribe(res=>{
    this.lineChartData.datasets[0].data = res.prices.map((a: any) =>{
      return a[1];  //secondElementInThePriceObject
    });
    this.lineChartData.labels= res.prices.map((a:any)=>{
      let date = new Date(a[0]) //converted the time to real date
      let time = date.getHours() > 12? 
      `${date.getHours() -12} : ${date.getMinutes()} pm`:
      `${date.getHours()} : ${date.getMinutes()} am`
      return this.days ===1? time : date.toLocaleDateString()
    })
  })
  }

}
