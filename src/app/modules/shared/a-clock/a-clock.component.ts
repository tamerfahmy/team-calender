import { Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-a-clock',
  templateUrl: './a-clock.component.html',
  styleUrls: ['./a-clock.component.scss']
})
export class AClockComponent implements OnInit, AfterViewInit {
  _initialDateTimeString: string;

  @Input() set initialDateTimeString(value: string) {
    this.init(value);
  }

  @Input() timeZone: string;

  initialDateTime: moment.Moment;
  currentHour: number = 0;
  currentMinute: number = 0;
  currentSecond: number = 0;

  @ViewChild('hour', {read: ElementRef, static: false}) hourHand: any;
  @ViewChild('minute', {read: ElementRef, static: false}) minuteHand: any;
  @ViewChild('second', {read: ElementRef, static: false}) secondHand: any;

  // 'x' is the degree value of the secondHand 'Transform[Rotate]'
  // 'y' is the degree value of the minuteHand 'Transform[Rotate]'
  // 'z' is the degree value of the hourHand 'Transform[Rotate]'
  x:number = 0;
  y:number = 0;
  z:number = 0;

  constructor() {
    this.initialDateTime = moment();
    this._initialDateTimeString = this.initialDateTime.toString();
    this.timeZone = this.getLocalTimeZone();

    this.init(this._initialDateTimeString);
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let me = this;
    setInterval(function () {
      me.x += 6/100;
      me.y += (6/100/60);
      me.z += (6/100/60/12);

      me.secondHand.nativeElement.style.transform = "rotate(" + me.x + "deg)";
      me.minuteHand.nativeElement.style.transform = "rotate(" + me.y + "deg)";
      me.hourHand.nativeElement.style.transform = "rotate(" + me.z + "deg)";
    }, 5);
  }

  init(initialDate: string) {
    this.initialDateTime = moment.parseZone(initialDate);

    this.currentHour = this.initialDateTime.hours();
    this.currentMinute = this.initialDateTime.minutes();
    this.currentSecond = this.initialDateTime.seconds();

    this.x = this.currentSecond * 6;
    this.y = this.currentMinute * 6 + ((6/60) * this.currentSecond);
    this.z = this.currentHour * 30 + ((30/60) * this.currentMinute + (((30/60)/60) * this.currentSecond));
  }

  private getLocalTimeZone(): string {
    return moment.tz.guess();
  }
}

