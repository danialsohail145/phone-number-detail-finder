import { Component, OnInit } from '@angular/core';

const FAQ = [
  {
    question: 'What can the users learn about a number that is calling them?',
    answer:
      'Users can find the reviews of the phone number written by other users, the interest in the phone number in the last month and, if possible, its location (for landlines). Sometimes, there are no reviews for a given phone number. If, however, the page has e.g. a thousand views, it shows that it is most likely an annoying caller.',
  },
  {
    question: 'What can the users learn about a number that is calling them?',
    answer:
      'Users can find the reviews of the phone number written by other users, the interest in the phone number in the last month and, if possible, its location (for landlines). Sometimes, there are no reviews for a given phone number. If, however, the page has e.g. a thousand views, it shows that it is most likely an annoying caller.',
  },
  {
    question: 'What can the users learn about a number that is calling them?',
    answer:
      'Users can find the reviews of the phone number written by other users, the interest in the phone number in the last month and, if possible, its location (for landlines). Sometimes, there are no reviews for a given phone number. If, however, the page has e.g. a thousand views, it shows that it is most likely an annoying caller.',
  },
];
const LAST_SEARCH = [
  {
    number: '+989121111111',
  },
  {
    number: '+44123456789',
  },
  {
    number: '+917360952130',
  },
  {
    number: '+989121111111',
  },
  {
    number: '+44123456789',
  },
  {
    number: '+917360952130',
  },
  {
    number: '+989121111111',
  },
  {
    number: '+44123456789',
  },
  {
    number: '+917360952130',
  },
  {
    number: '+989121111111',
  },
  {
    number: '+44123456789',
  },
  {
    number: '+917360952130',
  },
];
const LASTEST_EVALUATION = [
  {
    number: '+917360952130',
    message: 'Hello',
  },
  {
    number: '+44123456789',
    message: 'Napa California as well in February of 2020!',
  },
  {
    number: '+44123456789',
    message:
      'This number has been calling my work all night. No one there, just beeps. Boise, Idaho.',
  },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  latest_evaluation = LASTEST_EVALUATION;
  last_search = LAST_SEARCH;
  faq_question = FAQ;
  constructor() {}

  ngOnInit(): void {}
}
