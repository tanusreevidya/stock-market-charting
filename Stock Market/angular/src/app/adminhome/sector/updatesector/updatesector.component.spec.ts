import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesectorComponent } from './updatesector.component';

describe('UpdatesectorComponent', () => {
  let component: UpdatesectorComponent;
  let fixture: ComponentFixture<UpdatesectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
