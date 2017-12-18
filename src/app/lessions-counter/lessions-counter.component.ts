import { Component, OnInit } from '@angular/core';
import {Lesson} from '../shared/model/lesson';
import {store} from '../event-bus-experiments/app-data';
import {Observer} from 'rxjs/Observer';

let _this;

@Component({
  selector: 'lessions-counter',
  templateUrl: './lessions-counter.component.html',
  styleUrls: ['./lessions-counter.component.css']
})
export class LessionsCounterComponent implements OnInit, Observer<Lesson[]> {
  error: (err: any) => void;
  complete: () => void;

  lessonsCounter = 0;

  constructor() {

    _this = this;
  }
  ngOnInit(): void {
    console.log('lesson list component is registered as observer ..');
    store.lessonList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('counter component received data ...');
    _this.lessonsCounter = data.length;
  }
}
