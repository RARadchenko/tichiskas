import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tichiskas';
}
