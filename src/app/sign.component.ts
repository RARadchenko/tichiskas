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

    stopPropagation(event: Event) {
        event.stopPropagation();
    }

    onKeyPress(event: KeyboardEvent): void { 
        if (event.key === "Enter") {
            this.validateAndSend();
        }
    }

    validateAndSend() {
        let login = this.signService.login;
        let password = this.signService.password;
        if (this.signService.login.length > 6 && this.signService.password.length > 6) {
            let userExist: boolean;
            this.http.doesUserExist(login).
                subscribe({
                    next: (data: any) => {
                        userExist = data;
                        if (userExist) {
                            this.http.getUser(login, password).
                                subscribe({
                                    next: (data: any) => {
                                        this.user.userData = data;
                                        this.signService.sign(false);
                                        this.signService.isUserLoggedToSystem = true;
                                    },
                                    error: (err: any) => this.signService.alert = err.error?.error || 'Unknown error'
                                });
                        }
                        else {
                            this.router.navigate(["/r"]);       
                        }
                    },
                    error: (err: any) => console.log(err)
                });
        }
    }
}