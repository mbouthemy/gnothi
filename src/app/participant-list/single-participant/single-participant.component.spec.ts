import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleParticipantComponent } from './single-participant.component';

describe('SingleParticipantComponent', () => {
  let component: SingleParticipantComponent;
  let fixture: ComponentFixture<SingleParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
