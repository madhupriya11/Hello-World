import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngSplitComponent } from './ang-split.component';

describe('AngSplitComponent', () => {
  let component: AngSplitComponent;
  let fixture: ComponentFixture<AngSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
