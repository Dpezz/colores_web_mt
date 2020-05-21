import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PATH: string = 'https://reqres.in/api/colors';

@Injectable({
    providedIn: 'root',
})
export class ColorService {
    constructor(public http: HttpClient) {}

    all(page = 1): Observable<any> {
        return this.http.get(`${PATH}?page=${page}`);
    }
}
