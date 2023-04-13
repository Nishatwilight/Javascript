import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionComponent } from './function.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NbCardModule, NbStatusService } from '@nebular/theme';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('FunctionComponent', () => {
  let component: FunctionComponent;
  let fixture: ComponentFixture<FunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionComponent ],
      imports: [HttpClientTestingModule,NbCardModule, FormsModule],
      providers: [NbStatusService],
      schemas: [NO_ERRORS_SCHEMA],

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
