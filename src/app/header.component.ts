import { Component } from "@angular/core";
import { SignService } from "./sign.service";
import { UserService } from "./user.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class AppHeader {
    constructor(public signService: SignService, public user: UserService) {}

    title = 'tichiskas';
    showUserMenu = false;

    signOut() {
        this.user.signOut();
    }
}