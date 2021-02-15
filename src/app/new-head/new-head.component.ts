import {Component, OnInit} from '@angular/core';

export interface data {
  title: string;
  date: any;
}

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
  transltext:data[];
  ev!:string;
  
  constructor() { 
    this.appTitle = 'Список ранее переведенных текстов';
    this.vid1 = true;
    this.vid2 = false;
    this.vid3 = false;
    this.transltext = (JSON.parse(localStorage.getItem('mySave') || '{}'));
      
  }
  
  ngOnInit(): void {
    
  }

 onClick (data: any):void {

  this.vid1 = false;
  this.appTitle = 'Просмотр переведенного текста';
  this.vid2 = false;
  this.vid3 = true;
  this.textplus = data;

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
    this.vid1 = false;
    this.appTitle = 'Просмотр переведенного текста';
    this.vid2 = false;
    this.vid3 = true;
    
  }

  update(planId: string, participantId: string) : void {
    alert('PlanId:' + planId + '    ParticipantId:' + participantId);
  }

    btnBegin (){
      this.vid1 = true
    this.appTitle = 'Список ранее переведенных текстов'
    this.vid2 = false
    this.vid3 = false
    if (this.transltext.length > 0) {
      this.transltext.push({title: this.textplus, date: new Date()})
    } else {
      this.transltext = [{title: this.textplus, date: new Date()}]
    };  
    localStorage.setItem('mySave', JSON.stringify(this.transltext));
    
  }

}
