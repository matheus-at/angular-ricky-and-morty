import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolCharacterCardComponent } from './cool-character-card.component';

describe('CoolCharacterCardComponent', () => {
  let component: CoolCharacterCardComponent;
  let fixture: ComponentFixture<CoolCharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolCharacterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolCharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
