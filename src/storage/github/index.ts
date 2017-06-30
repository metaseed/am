import { IStorage } from '../storage';
import Octokat from 'octokat';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

//https://github.com/philschatz/octokat.js/issues/180
//downgrade to 0.8
// https://github.com/philschatz/octokat.js/pull/176
// https://github.com/philschatz/octokat.js
//https://developer.github.com/changes/2012-09-28-auto-init-for-repositories/
@Injectable()
export class GitHubStorage implements IStorage {
    private _baseUrl = 'https://api.github.com/';
    // private octo = new Octokat({ username: 'metasong', password: 'mssong179' });
    // private repo = this.octo.repos('metaseed', 'me');
    constructor(private _http: Http) {
    }

    call() {
        let username: string = 'metasong';
        let password: string = 'mssong179';
        let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        //        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this._http.post(
            this._baseUrl + 'user/repos',
            {
                "name": "Hello-World-test",
                "description": "This is your first repository",
                "homepage": "https://github.com",
                "private": false,
                "auto_init": true,
                "has_issues": true,
                "has_projects": true,
                "has_wiki": true
            },
            new RequestOptions({
                headers: headers
            })
        );
    }

    newPost(name: string): string {
        //     this.repo.fetch().then(({ defaultBranch }) => {
        //         this.repo.branches(defaultBranch).fetch().then(({ commit }) => {
        //             let config = {
        //                 message: 'I am commit-ing'
        //         content: 'a'
        //             }
        //             return this.repo.contents('test_create.txt').add(config)
        //                 .then(null, function (err) { console.log(err); throw new Error(err) })
        //                 .then(response => {
        //                     console.log(response.commit.sha)
        //                 })
        //         })
        //     })
        return '';
    }
    delPost(id: string): boolean {
        throw new Error("Method not implemented.");
    }

}
