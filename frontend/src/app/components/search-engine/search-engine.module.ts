import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSingleComponent } from './search-single/search-single.component';
import { SearchMultipleComponent } from './search-multiple/search-multiple.component';
import { HistoryByUserComponent } from './history-by-user/history-by-user.component';
import { HistoryAllUsersComponent } from './history-all-users/history-all-users.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchSingleComponent, SearchMultipleComponent, HistoryByUserComponent, HistoryAllUsersComponent],
  imports: [
    CommonModule, NgZorroAntdModule,  FormsModule
  ],
  exports: [
    SearchSingleComponent, SearchMultipleComponent, HistoryByUserComponent, HistoryAllUsersComponent
  ]

})
export class SearchEngineModule { }
