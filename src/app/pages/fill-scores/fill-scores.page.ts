import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-fill-scores',
  templateUrl: './fill-scores.page.html',
  styleUrls: ['./fill-scores.page.scss'],
})
export class FillScoresPage implements OnInit {

  @Input() value: string = "777";
  @Input() bottom: string = "AIM";

  constructor() { }

  ngOnInit() {

  }

  ionViewDidEnter() {    

    //this.drawLines();

  }


}
