import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
  showMe:boolean = false

  toggleTag(){
    this.showMe = !this.showMe
  }
}
