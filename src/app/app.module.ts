import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // Angular material Browser Animations

import { AppComponent } from './app.component';

//Custom Modules
import { SharedModule } from './shared/modules/shared.module'

// Custom Components
import { LayoutComponent } from './components/common/layout/layout.component';
import { HomeComponent } from './components/common/home/home.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './components/common/navigation/header/header.component';
import { SidenavListComponent } from './components/common/navigation/sidenav-list/sidenav-list.component';
import { NotFoundComponent } from './components/common/error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './components/common/error-pages/server-error/server-error.component';
import { ScriptService } from './shared/services/script-loader.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NotFoundComponent,
    ServerErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
