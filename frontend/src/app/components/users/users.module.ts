import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UsersListComponent, CreateUserComponent, EditUserComponent, MyProfileComponent, UserDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UsersListComponent, CreateUserComponent, EditUserComponent, MyProfileComponent
  ]
})
export class UsersModule { }
