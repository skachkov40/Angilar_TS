import { Injectable } from '@angular/core';
import { Datatext } from '../models/datatext'

@Injectable({
  providedIn: 'root'
})
export class DatastrService {

  constructor() { }

getTexts (): Datatext[] {
  return (JSON.parse(localStorage.getItem('mySave') || '{}'));
}


}
