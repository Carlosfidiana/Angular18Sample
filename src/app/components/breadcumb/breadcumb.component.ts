import { Component, effect, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcumbService } from '../../services/breadcumb.service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { map, shareReplay, switchMap, tap } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-breadcumb',
  standalone: true,
  imports: [BreadcrumbModule,JsonPipe],
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.css'
})
export class BreadcumbComponent{
    bcService=inject(BreadcumbService);
    home={label: ' Inicio',routerLink: '',icon: 'pi pi-home'}
    path:any=[];  //por culpa de breadcumb que no actualiza si no muta el array

    constructor(){
      effect(()=>{this.path=[...this.bcService.$path().path]});
      
  }
   
}
