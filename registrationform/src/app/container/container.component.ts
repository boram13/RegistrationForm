import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  sidebarStatus: boolean = false;

  sidebarChange(event: boolean) {
    this.sidebarStatus = event
  } 
}
