import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AuthService } from '../../services/auth.service';
import { BreadcumbComponent } from '../breadcumb/breadcumb.component';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MenubarModule, RouterLink, RouterLinkActive,BreadcumbComponent],
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
    label: 'Sobre el creador',
    icon: PrimeIcons.LINKEDIN,
    url:'https://es.linkedin.com/in/carlosserranosanchez',
   },
   {
    label: 'Inicio',
    icon: PrimeIcons.HOME,
    style: { 'margin-left': 'auto' },
    items: [{
      label: 'Compartir',
      icon: PrimeIcons.SHARE_ALT,
      command: () => {
        //window.location.reload();
        navigator.share({
          title: 'Angular18Sample',
          text: 'Angular18Sample',
          url: window.location.href
        })
      }},
       { label: 'Cerrar Sesión',
        icon: PrimeIcons.SIGN_OUT,

        command: () => {
          this.auth.logout();
        }
       },
    ],
   
  }
];
  constructor(public auth:AuthService){
  }
}

