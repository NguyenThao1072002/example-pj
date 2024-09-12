import { Component } from '@angular/core';
import { ComponentOverviewByCliComponent } from '../component-overview-by-cli/component-overview-by-cli.component';
import { ComponentOverviewByManualComponent } from '../component-overview-by-manual/component-overview-by-manual.component';


@Component({
  selector: 'app-overview-container',
  standalone: true,
  imports: [ComponentOverviewByCliComponent, ComponentOverviewByManualComponent],  // Hợp nhất các import vào một mảng
  template: `
    <div>
      <app-component-overview-by-cli></app-component-overview-by-cli>
      <app-component-overview-by-manual></app-component-overview-by-manual>
    </div>
  `,
  styleUrls: ['./overview-container.component.scss']
})
export class OverviewContainerComponent { }
