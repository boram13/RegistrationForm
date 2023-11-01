import { Component ,EventEmitter, Output} from '@angular/core';


/**
 * @title Toolbar overview
 */

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {

  @Output() sidebarEmitter = new EventEmitter<boolean>();
  menuStatus:boolean = false;
  constructor() {}
  ngOnInit(): void {
    
  }
  
  sidebarToggled(){
    console.log('sidebar button clicked')
    this.menuStatus = !this.menuStatus;
    this.sidebarEmitter.emit(this.menuStatus);
  }
}
