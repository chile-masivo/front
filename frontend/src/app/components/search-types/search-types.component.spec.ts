import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTypesComponent } from './search-types.component';

describe('SearchTypesComponent', () => {
  let component: SearchTypesComponent;
  let fixture: ComponentFixture<SearchTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
