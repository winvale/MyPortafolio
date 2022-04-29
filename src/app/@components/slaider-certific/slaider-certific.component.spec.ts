import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaiderCertificComponent } from './slaider-certific.component';

describe('SlaiderCertificComponent', () => {
  let component: SlaiderCertificComponent;
  let fixture: ComponentFixture<SlaiderCertificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaiderCertificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaiderCertificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
