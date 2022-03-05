import { ComponentsModule } from './../../shared/components/components.module'
import { AppMaterialModule } from './../../shared/app-material/app-material.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EpisodesRoutingModule } from './episodes-routing.module'
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, EpisodesRoutingModule, AppMaterialModule, ComponentsModule],
})
export class EpisodesModule {}
