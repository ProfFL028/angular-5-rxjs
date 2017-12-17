import {Component, OnInit} from '@angular/core';
import {lessonsList$, Observer} from '../event-bus-experiments/app-data';
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
    lessonsList$.subscribe(this);
  }

  next(data: any) {
    console.log('Lessons list component received data ...');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggle lesson ...');
    lesson.completed = !lesson.completed;
  }

  delete(deleted: Lesson) {
    _.remove(this.lessons, lesson => lesson.id === deleted.id );
  }
}
