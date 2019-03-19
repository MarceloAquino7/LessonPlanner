import { Observable } from 'rxjs';

export abstract class IProvider {

    public abstract get(url: string): Observable<any>;

    public abstract getByParam(url: string, params :{}): Observable<any>;

    public abstract post(url: string, obj: any): Observable<any>;

    public abstract put(url: string, obj: any): Observable<any>;

    public abstract delete(url: string, id: string): boolean;
}