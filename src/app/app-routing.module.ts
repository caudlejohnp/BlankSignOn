import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
