import { Component, Input, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { JsonPipe } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessagesModule } from 'primeng/messages';
import { HomedataComponent } from '../../components/homedata/homedata.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe,ProgressBarModule,MessagesModule,HomedataComponent,BreadcrumbModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  $state:WritableSignal<any>=signal({
    filter: 'category',
    data: null,
    loading:true,
    error:null
  });
  home= {label: 'Home',routerLink: '',icon: 'pi pi-home'}
  path:any=[]

  constructor(private api: ApiService,private router:Router) { }
 

  @Input()
  set filter(filter: string) {
    this.path=[];
    this.path.push(filter=='category'?{label: 'Categorías',icon: 'pi pi-th-large'}:{label: 'Nacionalidades',icon: 'pi pi-flag'});
    this.api.getData(filter).subscribe({
      next: (data) => {
        console.log(data)
        this.$state.update(state=>{
          return{
            ...state,
          loading: false,
          error:null,
          data: filter=='category'?data?.meals.map((m:any) => {return {name:m.strCategory}}):data?.meals.map((m:any) => {return {name:m.strArea}})
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
          data: []
          }
        })
      } 
    })
  }

  seeRecipes(type:string){
    this.router.navigateByUrl(`/recipes?filter=${this.$state().filter}&type=${type}`)
  }
  
}
