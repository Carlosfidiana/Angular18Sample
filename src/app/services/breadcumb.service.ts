import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, shareReplay, Subject } from 'rxjs';

interface changeRoute {
  label: string,routerLink: string,queryParams?:any,icon: string,level:number
}

@Injectable({
  providedIn: 'root'
})
export class BreadcumbService {
  $state:WritableSignal<any>=signal({
    home: {label: ' Inicio',routerLink: '',icon: 'pi pi-home'},
    path: []
  })

  constructor() { }

  set change(data: changeRoute) {
    this.$state.update(state=>{
      let newPath =  state.path;
      if(state.path.length<=data.level){newPath.push(data)}
      else{  newPath.splice(0,data.level+1); newPath[data.level]=data}

      return{
        ...state,
        path: newPath
      }
    });
  }


  get $path(){
    console.log(this.$state())
    return computed(()=>{
      let tmp = {
        home: this.$state().home,
        path: JSON.parse(JSON.stringify(this.$state().path)) //Deep Copy
      }
      if(tmp.path.length<1)return tmp;
      //
      tmp.path[tmp.path.length-1].routerLink = '';  
      return tmp;
    });
    
  }
}
