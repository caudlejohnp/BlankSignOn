import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { RegistrationComponent } from "./registration/registration.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegistrationComponent,
    UserProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
