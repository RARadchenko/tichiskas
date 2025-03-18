import { Component } from "@angular/core";
import { AppHeader } from "./header.component";

@Component({
    selector: 'app-comp',
    standalone: true,
    imports: [AppHeader],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = "tichiskas";
}