import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleMessageComponent } from './title-message.component';

describe('TitleMessageComponent', () => {
  let component: TitleMessageComponent;
  let fixture: ComponentFixture<TitleMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
