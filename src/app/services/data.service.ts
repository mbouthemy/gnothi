import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService<Type> {
  private resolveSuffix = '?resolve=true';
  private actionUrl: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.actionUrl = '/api/';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public getAll(ns: string): Observable<Type[]> {
    console.log('GetAll ' + ns + ' to ' + this.actionUrl + ns);
    return this.http.get(`${this.actionUrl}${ns}`)
      .pipe(map(this.extractData));
  }

  public getSingle(ns: string, id: string): Observable<Type> {
    console.log('GetSingle ' + ns);

    return this.http.get(this.actionUrl + ns + '/' + id + this.resolveSuffix)
      .pipe(map(this.extractData));
  }

  public add(ns: string, asset: Type): Observable<Type> {
    console.log('Entered DataService add');
    console.log('Add ' + ns);
    console.log('asset', asset);

    return this.http.post(this.actionUrl + ns, asset)
      .pipe(map(this.extractData));
  }

  public update(ns: string, id: string, itemToUpdate: Type): Observable<Type> {
    console.log('Update ' + ns);
    console.log('what is the id?', id);
    console.log('what is the updated item?', itemToUpdate);
    console.log('what is the updated item?', JSON.stringify(itemToUpdate));
    return this.http.put(`${this.actionUrl}${ns}/${id}`, itemToUpdate)
      .pipe(map(this.extractData));
  }

  public delete(ns: string, id: string): Observable<Type> {
    console.log('Delete ' + ns);

    return this.http.delete(this.actionUrl + ns + '/' + id)
      .pipe(map(this.extractData));
  }


  private extractData(res: Response): any {
    return res.json();
  }

}
