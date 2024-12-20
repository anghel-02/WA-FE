import { Component, ViewEncapsulation  } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DescriptionDTO } from 'src/app/description';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DescriptionComponent{

selected: string = ""
editorData : string = "";

constructor(private auth  : AuthService){}
  

onSubmit(): void{
  console.log(this.selected, this.editorData);
  this.auth.updatedesc(this.selected, this.editorData).subscribe();

} 

}


