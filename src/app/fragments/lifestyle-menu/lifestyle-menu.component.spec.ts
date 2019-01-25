import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleMenuComponent } from './lifestyle-menu.component';

describe('LifestyleMenuComponent', () => {
  let component: LifestyleMenuComponent;
  let fixture: ComponentFixture<LifestyleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifestyleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestyleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
