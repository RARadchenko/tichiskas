import { Component } from "@angular/core";
import { AppHeader } from "./header.component";
import { SignService } from "./sign.service";
import { HttpService } from "./http.service";
import { UserService } from "./user.service";
import { RouterOutlet } from "@angular/router";
import { SignPopupComponent } from "./sign.component";

@Component({
    selector: 'app-comp',
    standalone: true,
    imports: [AppHeader, RouterOutlet, SignPopupComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [SignService, HttpService, UserService]
})
export class AppComponent {
    constructor() {}
    title = "tichiskas";
}