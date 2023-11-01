import { Component , Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnChanges{
  @Input() sidebarStatus!: boolean
  @ViewChild('drawer') drawer!: MatDrawer

  ngOnChanges(changes: SimpleChanges): void {
    this.drawer?.toggle(changes['sidebarStatus'].currentValue)
  }
}
