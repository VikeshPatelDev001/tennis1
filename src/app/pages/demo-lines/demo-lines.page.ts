import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-demo-lines',
  templateUrl: './demo-lines.page.html',
  styleUrls: ['./demo-lines.page.scss'],
})
export class DemoLinesPage implements OnInit {

  ctx;
  canvas;
  connectors = [];
  constructor() { }

   noop() {
    var a = 10;
  }

  connect() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0; i < this.connectors.length; i++) {
        var c = this.connectors[i];
        var eFrom = c.from;
        var eTo = c.to;
        var pos1 = eFrom.offset();
        var pos2 = eTo.offset();
        // var size1 = eFrom.size();
        // var size2 = eTo.size();
        this.ctx.beginPath();
        // this.ctx.moveTo(pos1.left + eFrom.width() + 3, pos1.top + eFrom.height() / 2);
        // this.ctx.lineTo(pos2.left + 5, pos2.top + eTo.height() / 2);
        this.ctx.moveTo(50, 50);
        this.ctx.lineTo(300, 300);
        this.ctx.stroke();
    }
    alert('a');
  }
    
  ngOnInit() {
    alert('aaaa');
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx.lineWidth = 3;

    var $canvas = $("#canvas");
    var canvasOffset = $canvas.offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;
    
    var $0 = $("#0");
    var $1 = $("#1");
    var $2 = $("#2");
    var $0r = $("#0r");
    var $1r = $("#1r");
    var $2r = $("#2r");
    
    // this.connectors.push({
    //     from: $0,
    //     to: $0r
    // });
    // this.connectors.push({
    //     from: $1,
    //     to: $0r
    // });
    // this.connectors.push({
    //     from: $2,
    //     to: $2r
    // });
    this.connectors.push({
      from: $0,
      to: $2r
  });

    this.connect();

    // $(".draggable").draggable({
    //   // event handlers
    //   start: this.noop,
    //   drag: this.connect,
    //   stop: this.noop
    // });

    alert('end');
  }  


}
  // function connect() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   for (var i = 0; i < connectors.length; i++) {
  //       var c = connectors[i];
  //       var eFrom = c.from;
  //       var eTo = c.to;
  //       var pos1 = eFrom.offset();
  //       var pos2 = eTo.offset();
  //       var size1 = eFrom.size();
  //       var size2 = eTo.size();
  //       ctx.beginPath();
  //       ctx.moveTo(pos1.left + eFrom.width() + 3, pos1.top + eFrom.height() / 2);
  //       ctx.lineTo(pos2.left + 5, pos2.top + eTo.height() / 2);
  //       ctx.stroke();

  //   }
  // }
  

