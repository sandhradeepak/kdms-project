import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcuComponent } from './dcu.component';

describe('DcuComponent', () => {
  let component: DcuComponent;
  let fixture: ComponentFixture<DcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
