import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Companydetails.ComComponent } from './companydetails.com.component';

describe('Companydetails.ComComponent', () => {
  let component: Companydetails.ComComponent;
  let fixture: ComponentFixture<Companydetails.ComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Companydetails.ComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Companydetails.ComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
