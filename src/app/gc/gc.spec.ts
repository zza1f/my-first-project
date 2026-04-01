import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gc } from './gc';

describe('Gc', () => {
  let component: Gc;
  let fixture: ComponentFixture<Gc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
