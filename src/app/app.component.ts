import { Component } from '@angular/core';

@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  items = ['HTML', 'CSS', 'JS', 'Angular'];
  newItem = '';

  addItem(){
    this.items.push(this.newItem);
    this.newItem = '';
  }
  removeItem(index: number){
    this.items.splice(index,1);
  }
}
