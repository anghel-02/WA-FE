import { Component, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatasetComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions1: Highcharts.Options = {
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
      text:'3000 photo',
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
    },series: 
    [
      {
          color: '#7b72ac',
          type: 'column',
          name: 'Corn',
          data: [200, 350, 400,350, 500, 450, 480]
      },
  ],
  legend:{
    enabled: false
  },
  credits: {
    enabled: false 
  }};

}
