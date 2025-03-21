import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "./user.service";
import { User } from "../classes/user";
import { Router, RouterLink } from "@angular/router";
import { HttpService } from "./http.service";

@Component({
    selector: "app-registration",
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: "./registration.component.html",
    styleUrl: "./registration.component.scss"
})
export class RegistrationComponent {
    constructor(public user: UserService, private router: Router, public http: HttpService) {}

    login = "";
    username = "";
    email = "";
    phone = "";
    password1 = "";
    password2 = "";
    alert = "";

    continue() {
        if (this.login.length <= 6 || this.username.length <= 6) {
            this.alert = "Login and username should be at least 7 symbols..."
            return;
        }

        if (this.password1.length <= 6) {
            this.alert = "Password should be at least 7 symbols..."
            return;
        }

        if (this.password1 !== this.password2) {
            this.alert = "Passwords isn't the same..."
            return;
        }

        const user = new User();
        user.login = this.login;
        user.name = this.username;
        user.email = this.email;
        user.phone = this.phone;
        user.password = this.password1;
        this.http.addUser(user).
            subscribe({
                next: (data: any) => {
                    this.user.userData = data;
                    this.router.navigate([""]);
                },
                error: (err: any) => this.alert = err
            });
    }
}