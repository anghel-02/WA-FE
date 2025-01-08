import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  num : number[] = [];
  rocks: string[] = ['Basalt', 'Coal', 'Granite', 'Limestone', 'Marble', 'Quartzite', 'Sandstone'];
  pred : any[] = [];
  confidenceMap = new Map();
  numtot! :string;
  Highcharts = Highcharts;
  chartOptions1: any;

  constructor (@Inject(forwardRef(() => AuthService)) private auth : AuthService){}

  ngOnInit(): void {
    
    for(let r of this.rocks){
      this.auth.getTotImg(r).subscribe(data =>{
        this.num.push(data);
        if(this.num.length>6){this.updatechart();}
        
      })
    }

    this.auth.getnumImg().subscribe(data =>{
      const numtotint : number = data;
      this.numtot = numtotint.toString();
      this.updatechart();
    })

    this.auth.getpredtot().subscribe(data =>{
      this.pred = data;
    })

    for(let r of this.rocks){
      this.auth.getConfidenceByLabel(r).subscribe(data =>{
        this.confidenceMap.set(r,data);
        console.log("data" + data)
      })
    }
    this.auth.getTotalConfidence().subscribe(data =>{
      this.confidenceMap.set("Total",data);
    })
    
  }

  updatechart() : void {

    this.chartOptions1 = {
      chart: {
        type: 'column'
    },
    title: {
        text: 'Dataset',
        style: {
          color: '#3eb6b4',
      }
    },
    subtitle: {
        text: this.numtot,
        style: {
          color: '#3eb6b4',
      }
    },
    xAxis: {
      labels:{
        style:{
          color:'#3eb6b4'
        }
      },
        categories: ['Basalt', 'Coal', 'Granite', 'Limestone', 'Marble', 'Quartzite', 'Sandstone'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
          },
  
      },
      yAxis: {
        labels:{
          style:{
            color:'#7b72ac'
          }
        },
          min: 0,
          title: {
              text: 'number of photo',
              style: {
                color: '#3eb6b4',
            }
          }
      },
      series: 
      [
        {
            color: '#7b72ac',
            type: 'column',
            name: 'Photo',
            data: this.num,
        },
    ],
    legend:{
      enabled: false
    },
    credits: {
      enabled: false 
    }};
}


  chartOptions2: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Val_accuracy',
      style: {
        color: '#3eb6b4',
    }
    },
    xAxis: {
      labels:{
        style:{
          color:'#7b72ac'
        }
      },
      title: {
        text: 'Epoch',
        style: {
          color: '#3eb6b4',
      }
      },
      categories: Array.from({ length: 20 }, (_, i) => (i * 1).toString()), 
    },
    yAxis: {
      labels:{
        style:{
          color:'#7b72ac'
        }
      },
      title: {
        text: 'Accuracy',
        style: {
          color: '#3eb6b4',
      }
      },
      min: 0,
      max: 1,
      tickInterval: 0.1
    },
    series: [
      {
        color: '#7b72ac',
        type: 'line',
        name: 'Accuracy',
        data: [0.15, 0.3, 0.31, 0.35, 0.41, 0.47, 0.48, 0.52, 0.55, 0.57, 0.61, 0.67, 0.68, 0.75, 0.69, 0.79, 0.81, 0.84, 0.88, 0.87]
      }
    ],
    legend:{
      enabled: false
    },
    credits: {
      enabled: false 
    }
  };
  
}
