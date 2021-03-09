import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 text: string = "";
  constructor(private activateRoute: ActivatedRoute) {

    this.text = activateRoute.snapshot.params['text'];
    //console.log(this.activateRoute, this.text);

   }





  ngOnInit(): void {



  }


}
