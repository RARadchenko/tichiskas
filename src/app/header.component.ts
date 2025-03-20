import { Component } from "@angular/core";
import { SignService } from "./sign.service";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class AppHeader {
    constructor(public signService: SignService) {}

    title = 'tichiskas';
}