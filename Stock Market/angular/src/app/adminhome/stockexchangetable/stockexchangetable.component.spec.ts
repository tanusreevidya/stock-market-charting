import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockexchangetableComponent } from './stockexchangetable.component';

describe('StockexchangetableComponent', () => {
  let component: StockexchangetableComponent;
  let fixture: ComponentFixture<StockexchangetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockexchangetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockexchangetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
