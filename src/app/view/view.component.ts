import { Component, OnInit, Input } from '@angular/core';
import { Datatext } from '../models/datatext';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() {

  }

  @Input() selectText!: string;

  ngOnInit(): void {
  }

  btnBack () {

  }

}
