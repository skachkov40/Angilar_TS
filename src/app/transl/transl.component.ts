import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-transl',
  templateUrl: './transl.component.html',
  styleUrls: ['./transl.component.css']

})



export class TranslComponent implements OnInit {
  textplus: string = '';
  langStart!: string;
  langEnd!: string;
  constructor() { }

  ngOnInit(): void {

  }

  onTransl(textplus: string, langStart: string, langEnd: string) {
  console.log(textplus, langStart, langEnd)
  }

}
