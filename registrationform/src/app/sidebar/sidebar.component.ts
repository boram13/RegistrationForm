import { Component , Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges{
  @Input() sidebarStatus!: boolean
  @ViewChild('drawer') drawer!: MatDrawer
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  showFilter = false

  ngOnChanges(changes: SimpleChanges): void {
    this.drawer.toggle(changes['sidebarStatus'].currentValue)
  }
}
