import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='toolbarSidebar';
  sidebarStatus:boolean = false;
  sidebarChange(event: boolean) {
    this.sidebarStatus = event
  } 
}
