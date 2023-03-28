import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFlipperComponent } from './color-flipper.component';

describe('ColorFlipperComponent', () => {
  let component: ColorFlipperComponent;
  let fixture: ComponentFixture<ColorFlipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorFlipperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorFlipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
