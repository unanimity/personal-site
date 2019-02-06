import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsLoaderComponent } from './metrics-loader.component';

describe('MetricsLoaderComponent', () => {
  let component: MetricsLoaderComponent;
  let fixture: ComponentFixture<MetricsLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricsLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
