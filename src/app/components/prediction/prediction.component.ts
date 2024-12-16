import { Component, forwardRef, Inject,OnInit,ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PredictionComponent implements OnInit{

  totpred : any [] = [];
  

  constructor (private auth : AuthService){}

  ngOnInit(): void {

    this.auth.getpredtot().subscribe(data =>{
      this.totpred= data;
      console.log(this.totpred)
      
    })
    
  }

  
  
  
  


}
