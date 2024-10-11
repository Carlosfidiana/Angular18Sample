import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home?filter=category', pathMatch: 'full' },
    { path: '**', component: ErrorpageComponent }
];
