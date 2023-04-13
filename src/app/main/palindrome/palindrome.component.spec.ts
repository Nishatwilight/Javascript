import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeComponent } from './palindrome.component';
import { NbCardModule, NbStatusService } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

describe('PalindromeComponent', () => {
  let component: PalindromeComponent;
  let fixture: ComponentFixture<PalindromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalindromeComponent ],
      imports: [NbCardModule, FormsModule],
      providers:[NbStatusService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
