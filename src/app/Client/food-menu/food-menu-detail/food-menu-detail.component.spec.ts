import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuDetailComponent } from './food-menu-detail.component';

describe('FoodMenuDetailComponent', () => {
  let component: FoodMenuDetailComponent;
  let fixture: ComponentFixture<FoodMenuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMenuDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
