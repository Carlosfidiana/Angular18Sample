import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewLayoutOptions, DataViewModule, } from 'primeng/dataview';
import { Skeleton, SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { BreadcumbService } from '../../services/breadcumb.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [DataViewModule,CommonModule,ButtonModule,TagModule,SkeletonModule, JsonPipe],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  $state:WritableSignal<any>=signal({
    loading:true,
    error:null, 
    items:[]
  })
  constructor(private bcService:BreadcumbService,private apiService:ApiService){}

  @Input()
  set type(type:string){
    this.bcService.change={label: type,icon: '',routerLink: '/home', queryParams: { filter: 'category',type:type },level:1};
    this.apiService.getRecipesByCategory(type).subscribe({
      next: (data:any) => {
        console.log(data)
        this.$state.update(state=>{
          return{
            ...state,
          loading: false,
          error:null,
          items: data?.meals
          }
        })
      },
      error: (err) => {
        console.log(err)
        this.$state.update(state=>{
          return{
            ...state,
          loading: false,
          error:err,
          items: []
          }
        });
      }
    })
  }
}

  


