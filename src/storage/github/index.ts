import { IStorage } from '../storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Const } from './Const';
import { UserInfo } from './user-info';
import { Repository } from './repository';
@Injectable()
export class GitHubStorage {
    private _userInfo = new UserInfo('metasong', 'mssong179', 'metaseed@gmail.com');

    constructor(private _http: Http) {
    }

    getRepos(name: string) {
        return this._http.get(`${Const.baseUrl}/user/repos/${this._userInfo.name}/${name}`)
            .map(value => {
                return new Repository(this._http, name, this._userInfo);
            });
    }

    newRepos(name: string) {
        let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(this._userInfo.name + ":" + this._userInfo.password));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this._http.post(
            Const.baseUrl + 'user/repos',
            {
                "name": name,
                "description": "This is your first repository",
                "homepage": "https://github.com",
                "private": false,
                "auto_init": true,
                "has_issues": true,
                "has_projects": true,
                "has_wiki": true
            },
            {
                headers: headers
            }
        ).map(value => {
            return new Repository(this._http, name, this._userInfo);
        });
    }

}
