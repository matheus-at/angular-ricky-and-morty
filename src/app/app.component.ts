import { Component } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-ricky-and-morty'

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('Wubba Lubba', 'Dub-Dub!!', {
      duration: 2000,
    })
  }
}
