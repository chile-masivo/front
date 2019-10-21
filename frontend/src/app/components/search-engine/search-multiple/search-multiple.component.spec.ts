import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMultipleComponent } from './search-multiple.component';

describe('SearchMultipleComponent', () => {
  let component: SearchMultipleComponent;
  let fixture: ComponentFixture<SearchMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
