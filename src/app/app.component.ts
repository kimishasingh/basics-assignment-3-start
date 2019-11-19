import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .whiteBg {
    color: white;
  }
  `]
})
export class AppComponent {

  displayPassword = true;
  clickCounter = 0;
  clicks = [];

  toggleDisplay() {
    this.displayPassword = !(this.displayPassword);
    this.clickCounter++;
    this.clicks.push("Button clicked at: " + new Date());
  }

  getStyle(index: any) {
    return index > 4 ? 'blue' : '';
  }
}
