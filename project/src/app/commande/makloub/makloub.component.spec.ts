import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakloubComponent } from './makloub.component';

describe('MakloubComponent', () => {
  let component: MakloubComponent;
  let fixture: ComponentFixture<MakloubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakloubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakloubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
