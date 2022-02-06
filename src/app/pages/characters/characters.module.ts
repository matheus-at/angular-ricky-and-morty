import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module'

import { ComponentsModule } from './../../shared/components/components.module'
import { CharactersRoutingModule } from './characters-routing.module'
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, CharactersRoutingModule, AppMaterialModule, ComponentsModule],
})
export class CharactersModule {}
