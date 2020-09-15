import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-fill-scores-big',
  templateUrl: './fill-scores-big.page.html',
  styleUrls: ['./fill-scores-big.page.scss'],
})
export class FillScoresBigPage implements OnInit {

  @Input() value: string = "777";

  constructor() { }

  ngOnInit() {
  }

}
