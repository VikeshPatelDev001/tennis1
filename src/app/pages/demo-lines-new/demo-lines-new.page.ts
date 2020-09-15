import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as $ from 'jquery'

@Component({
  selector: 'app-demo-lines-new',
  templateUrl: './demo-lines-new.page.html',
  styleUrls: ['./demo-lines-new.page.scss'],
})
export class DemoLinesNewPage implements OnInit {

  ctx;
  canvas;
  connectors = [];

  canvasOffset;
  canvasOffsetX;
  canvasOffsetY;

  top_1;
  left_1;

  top_2;
  left_2;

  top_3;
  left_3;

  top_4;
  left_4;

  top_5;
  left_5;

  constructor(public platform:Platform){
    this.InitiatePlatformIfReady();
  }

  ionViewDidEnter() {    

    this.drawLines();

  } 


   noop() {
    var a = 10;
  }

  InitiatePlatformIfReady() {
    this.platform.ready().then(() => {
      console.log('before subscribe');
      this.platform.resize.subscribe(() => {
        console.log('resized');
        this.drawLines();
      });
    });
  }

  drawLines() {

    this.ctx.clearRect(0, 0, 600, 600);
    this.ctx.globalCompositeOperation='destination-over';
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = '#22a6dc';
    
    this.ctx.beginPath();

    this.ctx.moveTo(75, 30);
    this.ctx.lineTo(125, 40);

    this.ctx.moveTo(266, 30);
    this.ctx.lineTo(215, 40);

    this.ctx.moveTo(75, 100);
    this.ctx.lineTo(125, 90);

    this.ctx.moveTo(266, 100);
    this.ctx.lineTo(215, 90);

    this.ctx.stroke();
    

  }

  ngOnInit() {
        
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 360;
    this.canvas.height = 600;    

    var $canvas = $("#canvas");

    this.canvasOffset = $canvas.offset();
    this.canvasOffsetX = this.canvasOffset.left;
    this.canvasOffsetY = this.canvasOffset.top;

  }

}
