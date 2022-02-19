import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc';
  data = []
  
  onSelectRow(row) {
   console.log('aaa', row);
   this.data = row;
  }
}
