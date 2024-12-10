import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  isDarkMode = false;
  selectedItem: string | null = null;
  

  toggleSelection(item: string) {
    if (this.selectedItem !== item) {
      this.selectedItem = item;
    }
  }


  toggleTheme(event: any) {
    this.isDarkMode = event.checked;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  
  }
}
