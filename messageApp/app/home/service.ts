import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class MessageService {

    message;
    constructor(private http: HttpClient) {
    

    }

    getMessage() {
        return this.http.get('http://10.3.141.1:1880/getCodes?codes=ADMIN.TO.USER');
        // return this.http.get('http://batban.fred.sensetecnic.com/api/public/bureau401/getMessage');
    }
}