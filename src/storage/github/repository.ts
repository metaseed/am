import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Const } from './const';
import { UserInfo } from './user-info';

export class Repository {

    public fullName: string;
    constructor(private _http: Http, private _name: string, private _userInfo: UserInfo) {
        this.fullName = `${this._userInfo.name}/${this._name}`;
    }

    newPost(name: string) {
        let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(this._userInfo.name + ":" + this._userInfo.password));
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        return this._http.post(
            `${Const.baseUrl}/repos/${this.fullName}/contents/${name}`,
            {
                "message": "create post",
                "committer": {
                    "name": this._userInfo.name,
                    "email": this._userInfo.email
                },
                "content": btoa('')
            },
            new RequestOptions({
                headers: headers
            })
        )
            .do(x => console.log(x), e => console.log(e));
    }

    delPost(repo: string, path: string, branch: string = '') {
        return this.getSha(path, branch)
            .do(x => console.log(x), e => console.log(e))
            .flatMap(response => {
                let headers: Headers = new Headers();
                headers.append("Authorization", "Basic " + btoa(this._userInfo.name + ":" + this._userInfo.password));
                headers.append("Content-Type", "application/x-www-form-urlencoded");

                return this._http.post(
                    `${Const.baseUrl}/repos/${this.fullName}/contents/${path}`,
                    {
                        "message": "delete post",
                        "committer": {
                            "name": this._userInfo.name,
                            "email": this._userInfo.email
                        },
                        "content": btoa('delete post'),
                        "sha": response.json().sha,
                        branch
                    },
                    new RequestOptions({
                        headers: headers
                    })
                )
                    .do(x => console.log(x), e => console.log(e));
            });
    }

    private getSha(path: string, branch: string = '') {
        branch = branch ? `ref=${branch}` : '';
        return this._http.get(`${Const.baseUrl}/repos/${this.fullName}/contents/${path}${branch}`);
    }
}