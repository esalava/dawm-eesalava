import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sales App';
  
  menu(enlaces: any) {
    enlaces.toggle()
  }
  hidden = false;
  
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
