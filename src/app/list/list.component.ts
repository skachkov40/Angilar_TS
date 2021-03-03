import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Datatext } from '../models/datatext';
import { DatastrService } from '../services/datastr.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
texts!: Datatext[];

@Output() data = new EventEmitter();


constructor (private datastrService: DatastrService, private router: Router) {}

ngOnInit(){
  this.getTexts();
}

getTexts (): void {
  this.texts = this.datastrService.getTexts()
}

onClick(text:string) {

this.router.navigate(['view', text]);
}

}
