import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredListbox } from './filtered-listbox';

describe('FilteredListbox', () => {
  let component: FilteredListbox;
  let fixture: ComponentFixture<FilteredListbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredListbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredListbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
