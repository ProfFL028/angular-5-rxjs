import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionsCounterComponent } from './lessions-counter.component';

describe('LessionsCounterComponent', () => {
  let component: LessionsCounterComponent;
  let fixture: ComponentFixture<LessionsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessionsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessionsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
