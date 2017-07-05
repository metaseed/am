import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

import { Http } from '@angular/http';
import { GithubStorage, Repository } from '../../storage/github';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController, private _http: Http,
    private storage: GithubStorage) {

  }

  presentPopover(event: Event) {
    this.storage.repos('test1').subscribe(
      (repo: Repository) => {
        console.log(repo);
        repo.post('test00', 'abc' + Date.now()).subscribe(() => {
          repo.delPost('test00').subscribe();
        });
      },
      (error) => console.log(error)
    );

    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
