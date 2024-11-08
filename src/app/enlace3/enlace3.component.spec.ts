import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enlace3Component } from './enlace3.component';

describe('Enlace3Component', () => {
  let component: Enlace3Component;
  let fixture: ComponentFixture<Enlace3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enlace3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enlace3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
