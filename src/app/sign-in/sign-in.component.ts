import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  formSubmit: FormGroup;
  validLogin = true;

  get inputEmailInvalid(): boolean {
    return (
      !this.formSubmit.controls.inputEmail.valid &&
      this.formSubmit.controls.inputEmail.touched
    );
  }

  get inputPasswordInvalid(): boolean {
    return (
      !this.formSubmit.controls.inputPassword.valid &&
      this.formSubmit.controls.inputPassword.touched
    );
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formSubmit = this.formBuilder.group({
      inputEmail: ["", Validators.email],
      inputPassword: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    console.log(this.formSubmit.value);

    this.validLogin = this.authService.login(this.formSubmit.controls.inputEmail.value,
      this.formSubmit.controls.inputPassword.value);
    
    if (this.validLogin) {
      this.router.navigate(['/userprofile']);
    }
  }
}
