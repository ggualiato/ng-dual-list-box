import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  @Input() source: Array<any>
  list: { text: string, selected: boolean }[]
  @Output() emitter = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.list = this.listAdapter(this.source)
  }

  selectItem(nome: string): void {
    this.list.forEach((item) => {
      if (item.text === nome) {
        item.selected = !item.selected
      }
    })

    this.emitter.emit(this.list)
  }

  listAdapter(source: string[]) {
    let listAdapted = source.map((item) => {
      return {
        text: item,
        selected: false
      }
    })

    return listAdapted
  }

}
