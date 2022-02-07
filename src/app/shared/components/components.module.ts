import { CoolCharacterCardModule } from './../../components/cool-character-card/cool-character-card.module'
import { NgModule } from '@angular/core'

import { CoolLoadingPhraseModule } from './../../components/cool-loading-phrase/cool-loading-phrase.module'

@NgModule({
  exports: [CoolLoadingPhraseModule, CoolCharacterCardModule],
})
export class ComponentsModule {}
