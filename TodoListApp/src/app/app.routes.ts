import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';

export const routes: Routes = [

    {
        path:"userList",
        component: UserComponent
    },

    {
        path:'newUser',
        component:AddUserComponent
    }
];
