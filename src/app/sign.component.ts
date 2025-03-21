import { Component } from "@angular/core";
import { SignService } from "./sign.service";
import { FormsModule } from "@angular/forms";
import { HttpService } from "./http.service";
import { UserService } from "./user.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-sign",
    standalone: true,
    imports: [FormsModule],
    templateUrl: './sign.component.html',
    styleUrl: './sign.component.scss'
})
export class SignPopupComponent {
    constructor(public signService: SignService, public http: HttpService, public user: UserService, private router: Router) {}

    login: string = '';
    password: string = '';
    alert: string = '';

    stopPropagation(event: Event) {
        event.stopPropagation();
    }

    onKeyPress(event: KeyboardEvent): void { 
        if (event.key === "Enter") {
            this.validateAndSend();
        }
    }

    validateAndSend() {
        let login = this.login;
        let password = this.password;
        if (this.login.length > 6 && this.password.length > 6) {
            let userExist: boolean;
            this.http.doesUserExist(login).
                subscribe({
                    next: (data: any) => {
                        userExist = data["exist"];
                        if (userExist) {
                            this.http.getUser(login, password).
                                subscribe({
                                    next: (data: any) => {
                                        this.user.userData = data;
                                        this.signService.sign(false);
                                    },
                                    error: (err: any) => this.alert = err.error?.error || 'Unknown error'
                                });
                        }
                        else {
                            this.signService.sign(false);
                            this.router.navigate(["/r"]);       
                        }
                    },
                    error: (err: any) => console.log(err)
                });
        }
    }
}