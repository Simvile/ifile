import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SharedFilesModule } from '../../../shared-files/src/lib/shared-files.module';
import { FilesComponent } from './components/files/files.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent,HeaderComponent, HomeComponent, FilesComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    SharedFilesModule
],
  bootstrap: [AppComponent]
})
export class AppModule { }
