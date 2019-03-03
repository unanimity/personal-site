import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLanguageComponent } from './set-language.component';

describe('SetLanguageComponent', () => {
  let component: SetLanguageComponent;
  let fixture: ComponentFixture<SetLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
