import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLogoComponent } from './hero-logo.component';

describe('HeroLogoComponent', () => {
  let component: HeroLogoComponent;
  let fixture: ComponentFixture<HeroLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
