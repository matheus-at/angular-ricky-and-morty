import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AppMaterialModule } from '../shared/app-material/app-material.module'
import { CharactersRoutingModule } from './characters-routing.module'
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, CharactersRoutingModule, AppMaterialModule],
})
export class CharactersModule {}
