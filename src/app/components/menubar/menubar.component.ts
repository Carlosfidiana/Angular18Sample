import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MenubarModule, RouterLink, RouterLinkActive],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  items:MenuItem[] = [{
    label: 'Inicio',
    icon: PrimeIcons.HOME,
    
    items: [
      { label: 'Categorías',
        icon: PrimeIcons.TH_LARGE,
        routerLinkActiveOptions: { exact: true },
        routerLink: '/home',
        queryParams: { filter: 'category' }
       },
       { label: 'Nacionalidades',
        icon: PrimeIcons.FLAG,
        routerLinkActiveOptions: { exact: true },
        routerLink: '/home',
        queryParams: { filter: 'country' }
       },
    ],
   
  },
  { 
    label: 'Favoritos',
    icon: PrimeIcons.HEART_FILL,
    routerLinkActiveOptions: { exact: true },
    routerLink: '/favorites'
   },
  { 
    label: 'Compartir',
    icon: PrimeIcons.SHARE_ALT,
    command: () => {
      //window.location.reload();
    }
   },
   { 
    label: 'Sobre mi',
    icon: PrimeIcons.USER,
    url:'https://es.linkedin.com/in/carlosserranosanchez',
   }
];
}
