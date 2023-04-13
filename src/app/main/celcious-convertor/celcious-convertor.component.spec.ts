import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CelciousConvertorComponent } from './celcious-convertor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NbCardModule, NbStatusService } from '@nebular/theme';

describe('CelciousConvertorComponent', () => {
  let component: CelciousConvertorComponent;
  let fixture: ComponentFixture<CelciousConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelciousConvertorComponent ],
      imports: [HttpClientTestingModule,
        NbCardModule],
        providers: [NbStatusService]
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
