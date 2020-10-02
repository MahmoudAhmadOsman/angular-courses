import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSessionComponent } from './live-session.component';

describe('LiveSessionComponent', () => {
  let component: LiveSessionComponent;
  let fixture: ComponentFixture<LiveSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
