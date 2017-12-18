///<reference path="../event-bus-experiments/app-data.ts"/>
import {Component, OnInit} from '@angular/core';
import { Observer, store} from '../event-bus-experiments/app-data';
import {Lesson} from '../shared/model/lesson';
import * as _ from 'lodash';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];

  constructor() {
    console.log('lesson list component is registered as observer');
  }

  ngOnInit() {
    store.subscribe(this);
  }

  next(data: any) {
    console.log('Lessons list component received data ...');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggle lesson ...');
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.deleteLesson(deleted);
  }
}
