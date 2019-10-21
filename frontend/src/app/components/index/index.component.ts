import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {
  
  isCollapsed = false;
  isMobile:boolean;

  constructor()  {
    const screenWidth = window.screen.width;
    if (screenWidth < 500) {
    //Mobile
     this.isMobile = true;
  
    } else {
    //PC
    this.isMobile = false;
    
    }

  }

 
}
