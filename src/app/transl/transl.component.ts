import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transl',
  templateUrl: './transl.component.html',
  styleUrls: ['./transl.component.css']
})
export class TranslComponent implements OnInit {
  textplus!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
