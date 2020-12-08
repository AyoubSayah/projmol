import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakloubadminComponent } from './makloubadmin.component';

describe('MakloubadminComponent', () => {
  let component: MakloubadminComponent;
  let fixture: ComponentFixture<MakloubadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakloubadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakloubadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
