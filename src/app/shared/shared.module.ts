import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';
import { ToastComponent } from './toast/toast.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    FormErrorComponent,
    ToastComponent,
    TopbarComponent,
    SpinnerComponent,
    FooterComponent,
  ],
  imports: [CommonModule, NgbToastModule, NgbDropdownModule, RouterModule],
  exports: [
    FormErrorComponent,
    ToastComponent,
    TopbarComponent,
    SpinnerComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
