import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
