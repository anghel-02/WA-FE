import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  Confidence : number = 0;
  error : string | null = null;
  @Input() duration : number = 3000;
  currentVal : number = 0;
  progress : number = 0;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.loadTotalConfidence();
    this.animateProgress();
  }
  
  loadTotalConfidence(): number {
    this.auth.getTotalConfidence().subscribe({
      next: (result: number) => {
        this.Confidence = result; // Salva il numero
        console.log('Total Confidence:', this.Confidence);
      },
      error: (err) => {
        this.error = 'Errore durante il caricamento del dato.';
        console.error('Errore:', err);
      },
    });
    return 0;
  }

  animateProgress(): void {
    console.log(this.Confidence);
    const step = this.Confidence / (this.duration / 50); // Incremento a ogni intervallo (50ms)
    const interval = setInterval(() => {
      if (this.currentVal >= this.Confidence) {
        this.currentVal = this.Confidence; // Imposta il valore finale
        clearInterval(interval); // Ferma l'animazione
      } else {
        this.currentVal += step; // Incrementa progressivamente il valore
        this.progress = (this.currentVal / this.Confidence) * 100; // Calcola la larghezza della barra
      }
    }, 50); // Intervallo di 50ms
  }
  
}
