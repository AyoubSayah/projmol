import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationpizzaComponent } from './creationpizza.component';

describe('CreationpizzaComponent', () => {
  let component: CreationpizzaComponent;
  let fixture: ComponentFixture<CreationpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
