import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRreservaComponent } from './dialog-rreserva.component';

describe('DialogRreservaComponent', () => {
  let component: DialogRreservaComponent;
  let fixture: ComponentFixture<DialogRreservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRreservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
