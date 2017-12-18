///<reference path="../event-bus-experiments/app-data.ts"/>
import {Component, OnInit} from '@angular/core';
import { store} from '../event-bus-experiments/app-data';
import {Lesson} from '../shared/model/lesson';
import {Observer} from 'rxjs/Observer';

let _this;

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit, Observer<Lesson[]> {
  error: (err: any) => void;
  complete: () => void;

  lessons: Lesson[] = [];

  constructor() {
    _this = this;
  }

  ngOnInit() {
    console.log('lesson list component is registered as observer');
    store.lessonList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('Lessons list component received data ...');
    _this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('toggle lesson ...');
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.deleteLesson(deleted);
  }
}
