import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  originalTheme = 'rgb(250, 158, 0'; 
  currentTheme = this.originalTheme;
  toggleTheme() {
    if (this.currentTheme === this.originalTheme) {
      this.currentTheme = 'yellow';
    } else {
      this.currentTheme = this.originalTheme;
    }
    this.setTheme(this.currentTheme);
  }


userName: string=" Mateo Vintmilla ";
theme: string="";
widthMenu:number=25;
visibleMenu:boolean=true;

alternateVisibility():void{
  this.visibleMenu=!this.visibleMenu;//alterna la visibildad del menu }
}
setTheme(color:string):void{//Cambia l color del menu
  this.theme=color;

}
setSize():void{
  this.widthMenu+=10;
  if(this.widthMenu>100){
    this.widthMenu=25;
  }
}
}
