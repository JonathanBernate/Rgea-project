import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isModalOpen = false;
  openModel = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setModel(isOpen: boolean) {
    this.openModel = isOpen;
  }

  constructor() { }

}
