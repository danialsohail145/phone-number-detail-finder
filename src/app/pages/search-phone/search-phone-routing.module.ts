import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowSearchComponent } from './components/show-search/show-search.component';

const routes: Routes = [
  {
    path: 'number',
    component: ShowSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPhoneRoutingModule {}
