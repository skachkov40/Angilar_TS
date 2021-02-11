import {Component, Input, OnInit} from '@angular/core';
import {Trans} from '../app.component';

@Component({
  selector: 'app-new-head',
  templateUrl: './new-head.component.html',
  styleUrls: ['./new-head.component.css']
})

export class NewHeadComponent implements OnInit {

  appTitle: String;
  vid1: boolean;
  vid2: boolean;
  vid3: boolean;
  textplus!: string;
  i!:number;
  data:any
  x:any

  
  @Input() trtext: Trans[] = [];

  constructor() { 
    this.appTitle = 'Список ранее переведенных текстов'
    this.vid1 = true
    this.vid2 = false
    this.vid3 = false
  }

  
  ngOnInit(): void {
    for (var x = 1, len = localStorage.length; x < len; x++) {
    this.data = JSON.parse(localStorage.getItem('saveText') || '');
    this.trtext.push({id: x, title: this.data.value, date: this.data.date})
    console.log(this.data, x+1);
    }
    
  }

  btnTransl () {
    this.vid1 = false
    this.vid2 = true
    this.appTitle = 'Перевод нового текста'
    this.vid3 = false
    this.textplus = ''
  }
  btnBack () {
    this.vid1 = true
    this.appTitle = 'Список ранее переведенных текстов'
    this.vid2 = false
    this.vid3 = false
    
  }
  btnTranslOk () {
    this.vid1 = false
    this.appTitle = 'Просмотр переведенного текста'
    this.vid2 = false
    this.vid3 = true
    this.i++
    this.trtext.push({id: this.i+1, title: this.textplus, date: new Date()})    
    localStorage.setItem('saveText', JSON.stringify({ key: this.i+1 ,value: this.textplus, date: new Date()}))
    console.log(this.i, this.textplus);

    
    

  }

}
