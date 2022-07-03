import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent implements OnInit {
  @Input() formErrorMessage: string = '';
  @Input() control: FormControl = new FormControl();
  constructor() {}

  ngOnInit(): void {}
  get ShowError() {
    if (this.control.invalid) {
      return this.formErrorMessage;
    }
    return '';
  }
}
