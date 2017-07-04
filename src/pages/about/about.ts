import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

import { Http } from '@angular/http';
import { GitHubStorage } from '../../storage/github';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController, private _http: Http, private storage: GitHubStorage) {

  }

  presentPopover(event: Event) {
    this.storage.newRepos('test').subscribe((repo) => {
      console.log(repo);
      repo.newPost('test').sub
    }, (error) => console.log(error));
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
