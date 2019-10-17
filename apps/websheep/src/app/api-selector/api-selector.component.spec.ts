import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSelectorComponent } from './api-selector.component';

describe('ApiSelectorComponent', () => {
  let component: ApiSelectorComponent;
  let fixture: ComponentFixture<ApiSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApiSelectorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
