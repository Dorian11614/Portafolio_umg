import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page.component';
import { AboutMePageComponent } from './about-me-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'about-me', component: AboutMePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }