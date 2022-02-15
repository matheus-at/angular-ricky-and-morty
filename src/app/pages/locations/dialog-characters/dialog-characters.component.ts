import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Character } from 'src/app/models/character'
import { Location } from 'src/app/models/location'

export interface DialogData {
  characters: Character[]
  location: Location
}
@Component({
  selector: 'app-dialog-characters',
  templateUrl: './dialog-characters.component.html',
  styleUrls: ['./dialog-characters.component.scss'],
})
export class DialogCharactersComponent implements OnInit {
  // eslint-disable-next-line no-unused-vars
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}
}
