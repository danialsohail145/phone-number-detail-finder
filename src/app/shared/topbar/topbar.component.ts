import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  showSideBar: boolean = false;
  firstActive: boolean = false;
  clickEvent: boolean = false;

  brandFlavor: any = localStorage.getItem('BrandFlavor');
  constructor() {}

  ngOnInit(): void {}
  activeSidebar() {
    this.firstActive = true;
    this.clickEvent = false;
    this.showSideBar = !this.showSideBar;
  }
  addItem(event: any) {
    this.showSideBar = event;
  }
  firstSideBar() {
    return true;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.showSideBar = false;
  }
  // @HostListener('window:click', ['$event'])
  // myMouseClicked(event: any) {
  //   this.showSideBar = false;
  // }
}
