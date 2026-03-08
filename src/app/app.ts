import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentNavbar } from "./pages/components/shared/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentNavbar],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('count-app');
}
