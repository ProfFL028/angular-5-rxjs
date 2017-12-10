import { Component, OnInit } from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE} from '../event-bus-experiments/event-bus';
import {Lesson} from '../shared/model/lesson';

@Component({
  selector: 'lessions-counter',
  templateUrl: './lessions-counter.component.html',
  styleUrls: ['./lessions-counter.component.css']
})
export class LessionsCounterComponent implements OnInit {

  lessonsCounter = 0;

  constructor() {
    console.log('lesson list component is registered as observer ..');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => this.lessonsCounter += 1
    });
  }
  ngOnInit(): void {
  }

  notify(data: Lesson[]) {
    console.log('counter component received data ...');
    this.lessonsCounter = data.length;
  }
}
