import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampComponent } from './examp.component';

describe('ExampComponent', () => {
  let component: ExampComponent;
  let fixture: ComponentFixture<ExampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
