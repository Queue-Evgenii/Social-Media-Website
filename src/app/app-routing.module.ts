import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from 'src/shared/components/not-found/not-found.component';
import { AuthRoutingModule } from 'src/modules/auth/auth-routing.module';
import { ProfileRoutingModule } from 'src/modules/profile/profile-routing.module';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    ProfileRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }