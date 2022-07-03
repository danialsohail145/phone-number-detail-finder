import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './components/faq/faq.component';
import { SearchPhoneModule } from '../search-phone/search-phone.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SearchPhoneModule,
    NgbAccordionModule,
  ],
})
export class FaqModule {}
