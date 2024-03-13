import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { GameNewComponent } from './game/game-new/game-new.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'user/login',
        component: LoginComponent,
    },
    {
        path: 'game/new',
        component: GameNewComponent
    }

];
