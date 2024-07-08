import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatchDtaComponent } from './featch-dta.component';

describe('FeatchDtaComponent', () => {
  let component: FeatchDtaComponent;
  let fixture: ComponentFixture<FeatchDtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatchDtaComponent]
    });
    fixture = TestBed.createComponent(FeatchDtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
