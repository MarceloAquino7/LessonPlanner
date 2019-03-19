import { IProvider } from './interfaces/iprovider';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { HttpClient } from '@angular/common/http';

const environmentURL = environment.url;


export class HttpService implements IProvider {
    public http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    public get(url: string): Observable<any> {
        return Observable.create(observer => {
            this.http.get(environmentURL + url).subscribe(result => {
                observer.next(result);
            });
        });
    }

    public getByParam(url: string, params: {}): Observable<any> {
        return Observable.create();
    }

    public post(url: string, obj: any): Observable<any> {
        return Observable.create(observer => {
            this.http.post(environmentURL + url, obj).subscribe(result => {
                observer.next(result);
            });
        });
    }

    public put(url: string, obj: any): Observable<any> {
        return Observable.create(observer => {
            this.http.put(environmentURL + url, obj.Id).subscribe(result => {
                observer.next(result);
            });
        });
    }

    public delete(url: string, id: string): boolean {
        return Observable.create(observer => {
            this.http.delete(environmentURL + url + "/" + id).subscribe(result => {
                observer.next(result);
                return true;
            });
        });
    }
}