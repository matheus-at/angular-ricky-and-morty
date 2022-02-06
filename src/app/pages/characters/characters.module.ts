import { CoolLoadingPhraseComponent } from '../../components/cool-loading-phrase/cool-loading-phrase.component'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module'

import { CharactersRoutingModule } from './characters-routing.module'
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [ListComponent, CoolLoadingPhraseComponent],
  imports: [CommonModule, CharactersRoutingModule, AppMaterialModule],
})
export class CharactersModule {}
