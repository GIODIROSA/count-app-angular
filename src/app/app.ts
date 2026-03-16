import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentNavbar } from "./pages/components/shared/navbar/navbar";
import { ComponentNavbar } from "./pages/components/shared/navbar/navbar";

@Component({
  imports: [RouterOutlet, ComponentNavbar]
  imports: [RouterOutlet, ComponentNavbar],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('count-app');
}
