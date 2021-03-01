import { Component, OnInit } from '@angular/core';
import { Datatext } from '../models/datatext';
import { DatastrService } from '../services/datastr.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
texts!: Datatext[];
selectText!: Datatext;

constructor (private datastrService: DatastrService) {}

ngOnInit(){
  this.getTexts();
}

getTexts (): void {
  this.texts = this.datastrService.getTexts()
}

btnTransl() {

}

onSelect(text:any) :void {
  this.selectText = text;
}

}
