import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private _title: Title) {
    this._title.setTitle('Ricky and Morty | Episodes')
  }

  ngOnInit(): void {}
}
