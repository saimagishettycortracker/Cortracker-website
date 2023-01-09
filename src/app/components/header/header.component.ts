import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(){

  }

  opendropbar = false;
  dropbar = ()=>{
      this.opendropbar = !this.opendropbar;
   }
   closeDrop(){
    this.opendropbar = false
    window.scrollTo(0, 0);
   }
}
