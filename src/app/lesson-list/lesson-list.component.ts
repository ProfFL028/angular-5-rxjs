import {Component, OnInit} from '@angular/core';
import {globalEventBus, LESSONS_LIST_AVAILABLE, Observer} from '../event-bus-experiments/event-bus';
import {Lesson} from '../shared/model/lesson';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() {
    console.log('lesson list component is registered as observer');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
  }

  ngOnInit() {
  }
  nofity(data: any) {
    console.log('Lessons list component received data ...');
    this.lessons = data;
  }

}
