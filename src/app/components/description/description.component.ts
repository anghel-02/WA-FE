import { Component, OnDestroy, OnInit, ViewEncapsulation  } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DescriptionComponent implements OnDestroy {

selected: string = ""
editorData : string = "";
editor: Editor = new Editor();
successMessage: string | null = null;
errorMessage: string | null = null;
html: any;

constructor(private auth  : AuthService){}

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  

onSubmit(): void{
  this.auth.updatedesc(this.selected, this.editorData).subscribe({
    next: () => {
      this.successMessage = "Descrizione aggiornata con successo!";
      this.errorMessage = null;
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    },
    error: (err) => {
      console.error("Errore:", err);
      this.errorMessage = "Errore nell'aggiornamento della descrizione";
      this.successMessage = null;
      setTimeout(() => {
        this.errorMessage = null;
      }, 3000);
    }
  });
    this.editorData = "";
    this.selected= "";
} 

}


