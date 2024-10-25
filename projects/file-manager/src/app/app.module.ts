import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SharedFilesModule } from '@ifile/shared-files';
import { FilesComponent } from './components/files/files.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeModule } from '@imanager/Employee';
import { MessengerModule } from '@imanager/Messenger';
import { MessengerComponent } from './components/messenger/messenger.component';

@NgModule({
  declarations: [AppComponent,
    HeaderComponent, 
    HomeComponent, 
    FilesComponent, 
    NotFoundComponent, 
    LogInComponent, 
    RegisterComponent,
    EmployeesComponent,
    MessengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    SharedFilesModule,
    EmployeeModule,
    MessengerModule
],
  bootstrap: [AppComponent]
})
export class AppModule { }
