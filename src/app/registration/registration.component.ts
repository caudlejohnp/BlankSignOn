import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  formSubmit: FormGroup;

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

  get confirmPasswordInvalid(): boolean {
    return (
      !this.formSubmit.controls.confirmPassword.valid &&
      this.formSubmit.controls.confirmPassword.touched
    );
  }

  get passwordError(): boolean {
    return this.formSubmit.hasError("passwordError");
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.formSubmit = this.formBuilder.group(
      {
        inputEmail: ["", Validators.email],
        inputPassword: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(15),
          ]),
        ],
        confirmPassword: [
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(15),
          ]),
        ],
      },
      { validators: this.passwordValidator }
    );
  }

  ngOnInit(): void {}

  submit(): void {
    console.log(this.formSubmit.value);
    this.authService.register(this.formSubmit.controls.inputEmail.value,
      this.formSubmit.controls.inputPassword.value);
    this.router.navigate(["/signin"]);
  }

  passwordValidator(control: AbstractControl): ValidationErrors {
    const password = control.get("inputPassword");
    const confirm = control.get("confirmPassword");

    if (confirm.value !== "" && password.value !== confirm.value) {
      return { passwordError: true };
    }
    return null;
  }
}
