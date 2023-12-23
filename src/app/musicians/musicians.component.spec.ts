import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiciansComponent } from './musicians.component';

describe('MusiciansComponent', () => {
  let component: MusiciansComponent;
  let fixture: ComponentFixture<MusiciansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusiciansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MusiciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
