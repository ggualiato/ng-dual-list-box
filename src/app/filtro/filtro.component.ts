import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})

export class FiltroComponent implements OnInit {
  listaUmBase: string[] = ['João', 'Maria', 'Thiago', 'José', 'Giovanni', 'Gustavo', 'Andre', 'Bruno', 'Alexandre', 'Josias']

  listaUm: { text: string, selected: boolean }[] = [
    {
      text: 'João',
      selected: false
    }, {
      text: 'Maria',
      selected: true
    }, {
      text: 'Thiago',
      selected: false
    }, {
      text: 'José',
      selected: true
    }, {
      text: 'Giovanni',
      selected: false
    }, {
      text: 'Gustavo',
      selected: false
    }, {
      text: 'Andre',
      selected: true
    }, {
      text: 'Bruno',
      selected: false
    }, {
      text: 'Alexandre',
      selected: false
    }, {
      text: 'Josias',
      selected: false
    }
  ].sort(this.sortBy)

  listaDois: { text: string, selected: boolean }[] = []

  constructor() { }

  ngOnInit() {
  }

  moveAllToRight(): void {
    // this.listaDois = this.listaDois.concat(this.listaUm).sort(this.sortBy)
    this.listaDois = this.unselectItens(this.listaDois.concat(this.listaUm).sort(this.sortBy))
    this.listaUm = []
  }

  moveToRight(): void {
    let selecteds = this.listaUm.filter((item) => item.selected)

    if (selecteds.length === 0) {
      return
    }

    selecteds = selecteds.map((item) => {
      return { ...item, selected: false }
    })

    this.listaUm = this.listaUm.filter((item) => !item.selected)
    this.listaDois = this.listaDois.concat(selecteds).sort(this.sortBy)
  }

  moveAllToLeft(): void {
    this.listaUm = this.unselectItens(this.listaUm.concat(this.listaDois).sort(this.sortBy))
    this.listaDois = []
  }

  moveToLeft(): void {
    let selecteds = this.listaDois.filter((item) => item.selected)

    if (selecteds.length === 0) {
      return
    }

    selecteds = selecteds.map((item) => {
      return { ...item, selected: false }
    })

    this.listaDois = this.listaDois.filter((item) => !item.selected)
    this.listaUm = this.listaUm.concat(selecteds).sort(this.sortBy)
  }

  sortBy(a, b) {
    if (a.text > b.text) {
      return 1;
    }
    if (a.text < b.text) {
      return -1;
    }

    return 0
  }

  unselectItens(list) {
    return list.map((item) => {
      return { ...item, selected: false }
    })
  }

  valorPassado(valor){
    this.listaUm = valor
  }

}
