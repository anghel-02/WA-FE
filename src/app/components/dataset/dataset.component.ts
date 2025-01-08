import { Component, forwardRef, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import * as Highcharts from 'highcharts';
import { AuthService } from 'src/app/auth.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { PageEvent } from '@angular/material/paginator';
import { style } from '@angular/animations';



@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DatasetComponent implements OnInit{

  num : number[] = [];
  rocks: string[] = ['Basalt', 'Coal', 'Granite', 'Limestone', 'Marble', 'Quartzite', 'Sandstone'];
  numtot! :string;
  Highcharts = Highcharts;
  chartOptions1: any;
  nome : any [] = [];
  foto : any [] = [];
  paginatedImages: string[] = [];
  pageSize: number = 7;
  pageIndex: number = 0;
 
  

  constructor (@Inject(forwardRef(() => AuthService)) private auth : AuthService){}


  ngOnInit(): void {
    
    let responses = new Array(this.rocks.length);

    for (let index = 0; index < this.rocks.length; index++) {
      let rock = this.rocks[index];
      this.auth.getTotImg(rock).subscribe(data => {
        responses[index] = data;
        if (responses.filter(response => response !== undefined).length === this.rocks.length) {
          this.num = responses;
          this.updatechart();
        }
      });
    }

  this.auth.getnumImg().subscribe(data =>{
    const numtotint : number = data;
    this.numtot = numtotint.toString();
    this.updatechart();
  
  })

  this.auth.getTotImg("Basalt").subscribe(data =>{
    this.num.push(data);
    this.takephoto("Basalt",0);
  })


  }


  takephoto(tabName: string, ind : number){
    this.foto = [];
    this.paginatedImages = [];
    const nume = Math.ceil(this.num[ind]/20);
    for(let i=0; i<nume; i++){
      this.auth.getphoto(tabName,i).subscribe(data =>{
        for (let img of data.content){
          this.foto.push(this.image(img.imageData));
          this.nome.push(img.name);
        }
        // if(i==nume-1){console.log(this.foto.length)}
        this.updatePaginatedImages();
        })
      }
      console.log(this.nome)
  }

  onTabChange(event: MatTabChangeEvent) {
      this.auth.getTotImg(event.tab.textLabel).subscribe(data =>{
        this.num.push(data);
        this.takephoto(event.tab.textLabel,event.index);
      })
    
  }

  
  image(base64: string): string {
    const imageUrl = 'data:image/jpg;base64,' + base64;
    return imageUrl;
  }


  onPageChange(event: PageEvent){
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    console.log(this.pageIndex);
    console.log(this.pageIndex);
    this.updatePaginatedImages();
  }

  updatePaginatedImages() {
    const startIndex = this.pageIndex * this.pageSize;
    this.paginatedImages = this.foto.slice(startIndex, startIndex + this.pageSize);
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
          description: 'Class'
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
    tooltip: {
      backgroundColor: '#FFFFFF', // Colore di sfondo del tooltip
      style: {
        color: '#FFFFFFFF' // Colore del testo all'interno del tooltip
      },
      borderColor: '#7b72ac', // Bordo del tooltip
    },
    series:[
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
