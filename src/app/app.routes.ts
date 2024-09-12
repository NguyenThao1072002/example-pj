import { Routes } from '@angular/router';
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component';
import { AppComponent } from './app.component';
import { ComponentOverviewByManualComponent } from './component-overview-by-manual/component-overview-by-manual.component';
import { OverviewContainerComponent } from './overview-container/overview-container.component';
export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'overview', component: OverviewContainerComponent },

];
