import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoolCharacterCardComponent } from './cool-character-card.component'

@NgModule({
  declarations: [CoolCharacterCardComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [CoolCharacterCardComponent],
})
export class CoolCharacterCardModule {}
