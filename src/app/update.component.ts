import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "./user.service";
import { User } from "../classes/user";
import { Router, RouterLink } from "@angular/router";
import { HttpService } from "./http.service";

@Component({
    selector: "app-update",
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: "./update.component.html",
    styleUrl: "./update.component.scss"
})
export class UpdateComponent {
    constructor(public user: UserService, private router: Router, public http: HttpService) {
        this.login = user.userData!.login;
        this.username = user.userData!.name;
        this.email = user.userData!.email;
        this.phone = user.userData!.phone;
    }

    login = "";
    username = "";
    email = "";
    phone = "";
    alert = "";

    continue() {
        if (this.login.length <= 6 || this.username.length <= 6) {
            this.alert = "Login and username should be at least 7 symbols..."
            return;
        }

        const user = new User(this.user.userData!.id, this.login, this.username, this.email, this.phone, this.user.userData!.password);
        this.http.updateUser(user).
            subscribe({
                next: (data: any) => {
                    let req: boolean = data["status"];
                    if (req) {
                        this.user.userData = user;
                        this.router.navigate([""]);
                    }
                },
                error: (err: any) => {
                    console.log(err);
                    this.alert = err["error"]["error"];
                }
            });
    }
}