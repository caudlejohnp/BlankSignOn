import { Injectable, Testability } from "@angular/core";
import { AuthModule } from "./auth.module";

@Injectable({
  providedIn: AuthModule,
})
export class AuthService {
  readonly TOKEN = "token";
  users: any[] = [{ username: "test@test.com", password: "test" }];

  get getToken(): string {
    return sessionStorage.getItem(this.TOKEN);
  }

  get loggedIn(): boolean {
    return this.getToken !== null ? true : false;
  }
  constructor() {}

  login(username: string, password: string): boolean {
    const user = this.users.find((u) => u.username === username);

    if (user !== undefined && user.password === password) {
      sessionStorage.setItem(this.TOKEN, `${username}:${password}`);
      return true;
    }
    return false;
  }

  register(username: string, password: string): void {
    this.users.push(username, password);
  }
}
