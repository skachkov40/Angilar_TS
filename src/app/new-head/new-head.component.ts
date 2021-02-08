import {Component, Input, OnInit} from '@angular/core';
import {Trans} from '../app.component';

@Component({
  selector: 'app-new-head',
  templateUrl: './new-head.component.html',
  styleUrls: ['./new-head.component.css']
})
export class NewHeadComponent implements OnInit {

  appTitle: String
  vid1: boolean
  vid2: boolean
  vid3: boolean

  @Input() trtext:Trans[] = []

  constructor() { 
    this.appTitle = 'Список ранее переведенных текстов'
    this.vid1 = true
    this.vid2 = false
    this.vid3 = false
  }

  
  ngOnInit(): void {
  }

  btnTransl () {
    this.vid1 = false
    this.vid2 = true
    this.appTitle = 'Перевод нового текста'
    this.vid3 = false
  }
  btnBack () {
    this.vid1 = true
    this.appTitle = 'Список ранее переведенных текстов'
    this.vid2 = false
    this.vid3 = false
  }
  btnTranslOk () {
    this.vid1 = false
    this.appTitle = 'Просмотр ранее переведенного текста'
    this.vid2 = false
    this.vid3 = true

  }

}
