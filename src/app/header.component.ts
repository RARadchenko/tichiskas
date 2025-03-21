import { Component } from "@angular/core";
import { SignService } from "./sign.service";
import { NgIf } from "@angular/common";
import { UserService } from "./user.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgIf, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class AppHeader {
    constructor(public signService: SignService, public user: UserService) {}

    title = 'tichiskas';
    showUserMenu = false;

    signOut() {
        this.user.signOut();
        this.signService.login = "";
        this.signService.password = "";
        this.signService.alert = "";
        this.signService.isUserLoggedToSystem = false;
    }
}