import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningComponentComponent } from './morning-component.component';

describe('MorningComponentComponent', () => {
  let component: MorningComponentComponent;
  let fixture: ComponentFixture<MorningComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorningComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorningComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
