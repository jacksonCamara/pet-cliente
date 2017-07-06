import { Cliente } from './cliente.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ClienteService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:8080/clientes/';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    add(cliente: Cliente): Observable<Response> {
        if (cliente._id) {
            return this.http.put(this.url + '/' + cliente._id, JSON.stringify(cliente), { headers: this.headers });
        } else {
            console.log("entrou no add cliente service")
            console.log(cliente);
            return this.http.post(this.url, JSON.stringify(cliente), { headers: this.headers });
        }
    }

    list(): Observable<Cliente[]> {
        console.log('list no cliente service')
        return this.http.get(this.url).map(res => res.json());
    }

    findOne(id: string): Observable<Cliente> {
        return this.http.get(this.url + '/' + id).map(res => res.json());
    }

    remove(id: string): Observable<Response> {
        return this.http.delete(this.url + '/' + id);
    }

    update(cliente: Cliente): Observable<Response> {
        return this.http.put(this.url + '/' + cliente._id, JSON.stringify(cliente), { headers: this.headers });
    }
}


