import {Component, Directive, Input, ViewChild, ElementRef, HostListener} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  @ViewChild('stickyMenu' , {static: false}) menuElement: ElementRef;
  @HostListener('window:scroll', ['$event'])
  handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.menuPosition){
          this.sticky = true;
      } else {
          this.sticky = false;
      }
  }
  title = 'site';

  sticky: boolean = false;

  menuPosition: any;
  ngAfterViewInit(){
      this.menuPosition = this.menuElement.nativeElement.offsetTop
  }

}
