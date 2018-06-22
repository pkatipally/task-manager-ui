import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTableListComponent } from './details-table-list.component';

describe('DetailsTableListComponent', () => {
  let component: DetailsTableListComponent;
  let fixture: ComponentFixture<DetailsTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
