import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningComponentComponent } from './evening-component.component';

describe('EveningComponentComponent', () => {
  let component: EveningComponentComponent;
  let fixture: ComponentFixture<EveningComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EveningComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EveningComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
