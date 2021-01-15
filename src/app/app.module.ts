import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AberturaContasComponent } from './abertura-contas/abertura-contas.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';


export const appRouters: Routes = [
  {path : 'login', component : LoginComponent },
  {path : 'aberturacontas', component : AberturaContasComponent},
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    AberturaContasComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
