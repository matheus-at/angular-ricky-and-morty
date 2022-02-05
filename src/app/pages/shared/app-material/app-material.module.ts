import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatRippleModule } from '@angular/material/core'

@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatDividerModule, MatProgressBarModule, MatRippleModule],
})
export class AppMaterialModule {}