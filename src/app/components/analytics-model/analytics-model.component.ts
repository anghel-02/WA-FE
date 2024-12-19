import { AfterViewInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';



@Component({
  selector: 'app-analytics-model',
  templateUrl: './analytics-model.component.html',
  styleUrls: ['./analytics-model.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsModelComponent{
  

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions1: Highcharts.Options = {
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
    tooltip: {
      backgroundColor: '#FFFFFF', // Colore di sfondo del tooltip
      style: {
        color: '#FFFFFFFF' // Colore del testo all'interno del tooltip
      },
      borderColor: '#7b72ac', // Bordo del tooltip
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


  chartOptions2: Highcharts.Options = {
    chart: {
      type: 'line'
  },
    title: {
      text: 'Val_loss',
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
        text: 'Loss',
        style: {
          color: '#3eb6b4',
      }
      },
      min: 0,
      max: 1.4,
      tickInterval: 0.2 
    },
    tooltip: {
      backgroundColor: '#FFFFFF', // Colore di sfondo del tooltip
      style: {
        color: '#FFFFFFFF' // Colore del testo all'interno del tooltip
      },
      borderColor: '#7b72ac', // Bordo del tooltip
    },
    series: [
      {
        color: '#7b72ac',
        type: 'line',
        name: 'Loss',
        data: [1.39, 1.22, 1.20, 1.09, 1.08, 1.05, 0.95, 0.98, 0.84, 0.82, 0.79, 0.83, 0.70, 0.60, 0.63, 0.50, 0.53, 0.38, 0.36, 0.39]
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


