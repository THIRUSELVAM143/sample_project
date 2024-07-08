import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecomComponent } from './samplecom.component';

describe('SamplecomComponent', () => {
  let component: SamplecomComponent;
  let fixture: ComponentFixture<SamplecomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamplecomComponent]
    });
    fixture = TestBed.createComponent(SamplecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
