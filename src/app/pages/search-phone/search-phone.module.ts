import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPhoneRoutingModule } from './search-phone-routing.module';
import { MainSearchComponent } from './components/main-search/main-search.component';
import { ShowSearchComponent } from './components/show-search/show-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipeModule } from 'src/app/pipe/pipe.module';
@NgModule({
  declarations: [MainSearchComponent, ShowSearchComponent],
  imports: [
    CommonModule,
    SearchPhoneRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PipeModule,
  ],
  exports: [MainSearchComponent],
})
export class SearchPhoneModule {}
