import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressTaskComponent } from './inprogress-task.component';

describe('InprogressTaskComponent', () => {
  let component: InprogressTaskComponent;
  let fixture: ComponentFixture<InprogressTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogressTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
