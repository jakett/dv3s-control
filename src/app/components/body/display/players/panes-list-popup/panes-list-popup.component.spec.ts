import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanesListPopupComponent } from './panes-list-popup.component';

describe('PanesListPopupComponent', () => {
  let component: PanesListPopupComponent;
  let fixture: ComponentFixture<PanesListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanesListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanesListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
