import { Component, forwardRef, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatasetComponent implements OnInit{

  num : number[] = [];
  rocks: string[] = ['Basalt', 'Coal', 'Granite', 'Limestone', 'Marble', 'Quartzite', 'Sandstone'];
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
    },series: 
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

img! : ArrayBuffer;
imgUrl: string[] = [];

onFileSelected(event: any, tabIndex: number): void {
  const file: File = event.target.files[0];
  if (file){
    const reader = new FileReader();
    reader.onload = (e:any) =>{
      this.img = e.target.result;
      this.imgUrl[tabIndex] = 'data:image/jpg;base64,' + btoa(String.fromCharCode(...new Uint8Array(this.img))); 
      const classe = this.rocks[tabIndex];
      this.uploadimg(classe,file);
    };
    reader.readAsArrayBuffer(file);
    }

    
  }


  uploadimg(classe : string, file : File){
    const formData = new FormData();
    formData.append('classe', classe);  
    formData.append('file', file);
    this.auth.addimg(formData)   
  }

}
