import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbInputModule, NbRouteTabsetModule, NbStatusService, NbTabsetModule } from '@nebular/theme';

import { ColorFlipperComponent } from './color-flipper.component';
import { NgModule } from '@angular/core';

describe('ColorFlipperComponent', () =>  {
  let component: ColorFlipperComponent;
  let fixture: ComponentFixture<ColorFlipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorFlipperComponent ],
      imports: [NbCardModule],
      providers: [NbStatusService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorFlipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ColorFliper Test Case ', () => {
    expect(component).toBeTruthy();
  });
  it('ColorFliper Checking ', () => {
    expect(component.resultColor).toBe(component.resultColor);
  });
});

