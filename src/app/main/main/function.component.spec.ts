import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionComponent } from './function.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NbCardModule, NbStatusService } from '@nebular/theme';

describe('FunctionComponent', () => {
  let component: FunctionComponent;
  let fixture: ComponentFixture<FunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionComponent ],
      imports: [HttpClientTestingModule,NbCardModule],
      providers: [NbStatusService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
