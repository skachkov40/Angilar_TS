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
    
    text1 = 'Какой-то текст который когда-то переводился, какой-то текст который когда-то переводился, какой-то текст который когда-то переводился'

    public trtext: Trans[] = [
      { id: 1, title: this.text1, date: new Date() },
      { id: 2, title: this.text1, date: new Date() },
      { id: 3, title: this.text1, date: new Date() },
    ]
}
