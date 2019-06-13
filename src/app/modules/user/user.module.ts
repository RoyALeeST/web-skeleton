import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

//Custom Modules
import { UserRoutingModule } from '../../routing/user/user-routing.module';
import { MaterialModule } from './../../shared/modules/material/material.module';

//Custom Components
import { UserListComponent } from '../../components/user/user-list/user-list.component';
import { UserDetailsComponent } from '../../components/user/user-details/user-details.component';
import { UserDataComponent } from '../../components/user/user-details/user-data/user-data.component';
import { AccountDataComponent } from '../../components/user/user-details/account-data/account-data.component';
// Custom Services

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserDataComponent,
    AccountDataComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class UserModule { }
