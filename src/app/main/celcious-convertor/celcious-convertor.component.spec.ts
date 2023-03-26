import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelciousConvertorComponent } from './celcious-convertor.component';

describe('CelciousConvertorComponent', () => {
  let component: CelciousConvertorComponent;
  let fixture: ComponentFixture<CelciousConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelciousConvertorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelciousConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
