import { IStorage } from '../storage';
import Octokat from 'octokat';

// https://github.com/philschatz/octokat.js/pull/176
// https://github.com/philschatz/octokat.js

export class GitHubStorage implements IStorage {
    _api = new Octokat();
    constructor() {

    }

    newPost(name: string): string {
        throw new Error("Method not implemented.");

    }
    delPost(id: string): boolean {
        throw new Error("Method not implemented.");
    }

}