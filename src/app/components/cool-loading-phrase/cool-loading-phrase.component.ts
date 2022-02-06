import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cool-loading-phrase',
  templateUrl: './cool-loading-phrase.component.html',
  styleUrls: ['./cool-loading-phrase.component.scss'],
})
export class CoolLoadingPhraseComponent {
  @Input() loading = false
}
