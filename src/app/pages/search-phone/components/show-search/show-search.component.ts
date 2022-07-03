import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const COMMENTS = [
  {
    comment:
      'Right these idiots have been calling me every couple of hours all through the night. had to unplug phone but this is not a long term solution. How do I stop it and report it to.',
    date: 'Jan 31, 2013',
    type: 'Neutral',
  },
  {
    comment:
      'Right these idiots have been calling me every couple of hours all through the night. had to unplug phone but this is not a long term solution. How do I stop it and report it to.',
    date: 'Jan 31, 2013',
    type: 'Unsafe',
  },
  {
    comment:
      'Right these idiots have been calling me every couple of hours all through the night. had to unplug phone but this is not a long term solution. How do I stop it and report it to.',
    date: 'Jan 31, 2013',
    type: 'Nuisance',
  },
];
@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.scss'],
})
export class ShowSearchComponent implements OnInit {
  phoneNumber: string = '';
  comments = COMMENTS;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.phoneNumber = params['phno'];
      console.log(this.phoneNumber);
    });
  }
}
