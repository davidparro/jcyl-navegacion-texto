import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionTextoComponent } from './navegacion-texto.component';

describe('NavegacionTextoComponent', () => {
  let component: NavegacionTextoComponent;
  let fixture: ComponentFixture<NavegacionTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
