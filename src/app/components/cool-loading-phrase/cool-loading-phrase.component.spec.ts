import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CoolLoadingPhraseComponent } from './cool-loading-phrase.component'

describe('CoolLoadingPhraseComponent', () => {
  let component: CoolLoadingPhraseComponent
  let fixture: ComponentFixture<CoolLoadingPhraseComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoolLoadingPhraseComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolLoadingPhraseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
