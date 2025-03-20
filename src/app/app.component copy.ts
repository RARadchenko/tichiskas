import { Component } from '@angular/core';
import { AppHeader } from "./header.component";

@Component({
  selector: 'app-root',
  imports: [AppHeader],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tichiskas';
}
