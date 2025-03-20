import { Component } from "@angular/core";
import { SignService } from "./sign.service";

@Component({
    selector: "app-home",
    standalone: true,
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss"
})
export class HomeComponent {
    login: string = '';
    password: string = '';
    alert: string = '';

    constructor(public signService: SignService) {}
}