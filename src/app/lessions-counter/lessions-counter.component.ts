import { Component, OnInit } from '@angular/core';
import {lessonsList$, Observer} from '../event-bus-experiments/app-data';
import {Lesson} from '../shared/model/lesson';

@Component({
  selector: 'lessions-counter',
  templateUrl: './lessions-counter.component.html',
  styleUrls: ['./lessions-counter.component.css']
})
export class LessionsCounterComponent implements OnInit, Observer {

  lessonsCounter = 0;

  constructor() {
    console.log('lesson list component is registered as observer ..');

    lessonsList$.subscribe(this);
  }
  ngOnInit(): void {
  }

  next(data: Lesson[]) {
    console.log('counter component received data ...');
    this.lessonsCounter = data.length;
  }
}
