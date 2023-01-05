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
    console.log("clicked");
      this.opendropbar = true;
   }
}
