import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentOverviewByCliComponent } from "./component-overview-by-cli/component-overview-by-cli.component";
import { ComponentOverviewByManualComponent } from './component-overview-by-manual/component-overview-by-manual.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentOverviewByCliComponent, ComponentOverviewByManualComponent],
  // imports: [RouterOutlet, ComponentOverviewByManualComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'example-pj';
}
