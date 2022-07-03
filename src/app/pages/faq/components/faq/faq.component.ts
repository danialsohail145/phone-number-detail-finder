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
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faq_question = FAQ;
  constructor() {}

  ngOnInit(): void {}
}
