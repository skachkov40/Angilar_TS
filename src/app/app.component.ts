import { Component } from '@angular/core';

export interface Trans {
  id: number
  title: string
  date?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  num = 11
  text1 = 'Какой-то текст который когда-то переводился, какой-то текст который когда-то переводился'  
  

    public trtext: Trans[] = [];

    
      //{ id: this.num, title: this.text1, date: new Date() },
      //{ id: this.num, title: this.text1, date: new Date() }
    //];
     
     
}
