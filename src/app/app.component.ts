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

  day = new Date();
  digits = [0,1,2,3,4,5,6,7,8,9,5];
  alphas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  addItem(){
    this.items.push(this.newItem);
    this.newItem = '';
  }
  removeItem(index: number){
    this.items.splice(index,1);
  }

  submitData = function(data:any) {
    console.log(data);

  }
}
