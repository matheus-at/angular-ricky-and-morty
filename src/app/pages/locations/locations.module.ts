import { AppMaterialModule } from './../../shared/app-material/app-material.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LocationsRoutingModule } from './locations-routing.module'
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, LocationsRoutingModule, AppMaterialModule],
})
export class LocationsModule {}
