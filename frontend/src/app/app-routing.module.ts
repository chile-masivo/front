import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { SearchMultipleComponent } from './components/search-engine/search-multiple/search-multiple.component';
import { MyProfileComponent } from './components/users/my-profile/my-profile.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { SearchSingleComponent } from './components/search-engine/search-single/search-single.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryByUserComponent } from './components/search-engine/history-by-user/history-by-user.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [ {
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard'
},
{
  path: '',
  component: IndexComponent,
  children: [
      {
          path: 'dashboard',
          component: DashboardComponent //toDo: only admin 
      },
      {
        path: 'users/list-users',
        component: UsersListComponent,  //toDo: only admin 
      },
      {
        path: 'users/create',
        component: CreateUserComponent, //toDo: only admin 
      },
      {
        path: 'users/details',
        component: UserDetailsComponent, //toDo: only admin 
      },
      {
          path: 'search/single',
          component: SearchSingleComponent, 
      },
      {
        path: 'search/multiple',
        component: SearchMultipleComponent,
      },
      {
        path: 'search/user-history',
        component: HistoryByUserComponent,
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
      },
  ]

}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
