import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryByUserComponent } from './history-by-user.component';

describe('HistoryByUserComponent', () => {
  let component: HistoryByUserComponent;
  let fixture: ComponentFixture<HistoryByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
