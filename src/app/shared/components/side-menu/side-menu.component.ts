import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    {title: 'Básicos', route: './reactive/basic'},
    {title: 'Dinamicos', route: './reactive/dynamic'},
    {title: 'Switches', route: './reactive/switches'},
  ];

  public authMenu: MenuItem[] = [
    {title: 'Registro', route: './auth'},
  ];

}
