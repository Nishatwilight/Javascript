import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CelciousConvertorComponent } from './celcious-convertor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NbCardModule, NbStatusService } from '@nebular/theme';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('CelciousConvertorComponent', () => {
  let component: CelciousConvertorComponent;
  let fixture: ComponentFixture<CelciousConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelciousConvertorComponent ],
      imports: [HttpClientTestingModule,
        NbCardModule, FormsModule],
        providers: [NbStatusService],
        schemas: [NO_ERRORS_SCHEMA],

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
