import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(filter: string):Observable<any>{
    //return fetch(`https://api.sampleapis.com/coffee/${filter}`).then(res => res.json());
    if(filter === 'country') {
      console.log("Retrieving nationalities")
      return this.http.get(environment.api.nationalities);
    }else{
      console.log(`Retrieving categories from ${environment.api.categories}`)
      return this.http.get(environment.api.categories);
    }
  
  }

  getRecipesByCategory(category:string){
    return this.http.get(environment.api.filterByCategory+category);
  }
}
