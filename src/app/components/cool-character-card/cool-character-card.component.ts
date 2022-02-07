import { Character } from './../../models/character'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cool-character-card',
  templateUrl: './cool-character-card.component.html',
  styleUrls: ['./cool-character-card.component.scss'],
})
export class CoolCharacterCardComponent {
  @Input() character: Character | undefined
}
