import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { TodoListComponent } from './page/todo-list/todo-list.component';

export const routes: Routes = [

    {
        path:'', component:LoginComponent
    },
    {
        path:'todolist', component:TodoListComponent
    }
];
