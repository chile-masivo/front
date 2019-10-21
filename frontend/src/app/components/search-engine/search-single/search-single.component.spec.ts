import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSingleComponent } from './search-single.component';

describe('SearchSingleComponent', () => {
  let component: SearchSingleComponent;
  let fixture: ComponentFixture<SearchSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
