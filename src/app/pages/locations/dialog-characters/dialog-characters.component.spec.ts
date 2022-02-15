import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCharactersComponent } from './dialog-characters.component';

describe('DialogCharactersComponent', () => {
  let component: DialogCharactersComponent;
  let fixture: ComponentFixture<DialogCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
