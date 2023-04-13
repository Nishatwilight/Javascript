import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCounterComponent } from './word-counter.component';
import { NbCardModule, NbStatusService } from '@nebular/theme';

describe('WordCounterComponent', () => {
  let component: WordCounterComponent;
  let fixture: ComponentFixture<WordCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCounterComponent ],
      imports: [NbCardModule],
      providers: [NbStatusService]
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
