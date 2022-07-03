import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast/service/toast.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss'],
})
export class MainSearchComponent implements OnInit {
  @Input() setPhoneNumber = '';
  isLoaded: boolean = true;
  phoneNumberControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[- +()]*[0-9][- +()0-9]*$'),
  ]);
  searchForm: FormGroup = new FormGroup({
    phonenumber: this.phoneNumberControl,
  });

  constructor(private toastService: ToastService, private router: Router) {}

  ngOnInit(): void {
    this.phoneNumberControl.setValue(this.setPhoneNumber);
  }

  submitSearch() {
    this.isLoaded = false;
    if (this.searchForm.invalid) {
      this.isLoaded = true;
      this.toastService.showErrorMessage('Please Enter Valid Data');
    } else {
      let phno = this.phoneNumberControl.value;
      if (phno.includes('+')) {
        phno = phno.split('+');
        phno = phno[1];
      }

      phno = phno.replace(/\s/g, '');
      this.isLoaded = true;
      this.router.navigate(['/search/number'], {
        queryParams: { phno: phno },
      });
    }
  }
}
