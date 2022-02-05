import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LocationsRoutingModule } from './locations-routing.module'
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, LocationsRoutingModule],
})
export class LocationsModule {}
