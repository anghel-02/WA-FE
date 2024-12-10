import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
