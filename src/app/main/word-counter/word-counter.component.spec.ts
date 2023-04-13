import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCounterComponent } from './word-counter.component';
import { NbCardModule, NbFocusMonitor, NbInputModule, NbStatusService, NbThemeModule } from '@nebular/theme';
import { NO_ERRORS_SCHEMA } from '@angular/core'; 
import { FormsModule } from '@angular/forms';

describe('WordCounterComponent', () => {
  let component: WordCounterComponent;
  let fixture: ComponentFixture<WordCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      declarations: [ WordCounterComponent ],
      imports: [NbCardModule, NbInputModule,  FormsModule],
      providers: [NbFocusMonitor, NbStatusService],
      schemas: [NO_ERRORS_SCHEMA],
     
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
