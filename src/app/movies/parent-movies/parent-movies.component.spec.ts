import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMoviesComponent } from './parent-movies.component';

describe('ParentMoviesComponent', () => {
  let component: ParentMoviesComponent;
  let fixture: ComponentFixture<ParentMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
