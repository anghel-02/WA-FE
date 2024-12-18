import { Component,OnInit, Inject, forwardRef  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Description } from 'src/app/description';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})

export class DescriptionComponent implements OnInit{


desc : string[] = [];
rocks: string[] = ['Basalt', 'Coal', 'Granite', 'Limestone', 'Marble', 'Quartzite', 'Sandstone'];


constructor(@Inject(forwardRef(() => AuthService)) private auth: AuthService){}


ngOnInit(): void {

}

onSubmit(form: NgForm){

 
  const data : Description [] = [];

  const bsdesc = form.value.bsdesc;
  const codesc = form.value.codesc;
  const grdesc = form.value.grdesc;
  const lmdesc = form.value.lmdesc;
  const madesc = form.value.madesc;
  const qudesc = form.value.qudesc;
  const sddesc = form.value.sddesc;

  const descr : any = [];
  descr.push(bsdesc);
  descr.push(codesc);
  descr.push(grdesc);
  descr.push(lmdesc);
  descr.push(madesc);
  descr.push(qudesc);
  descr.push(sddesc);

  for (const [ind, ele] of this.rocks.entries()){
    for (const [ind1, ele1] of descr.entries()){
      if (ind == ind1){
        const descriptions : Description = {
          rockname: ele,
          description: ele1
        };
        data.push(descriptions);
      }
    }
    
  }

  console.log(data)

  this.auth.updatedesc(data)

}


} 