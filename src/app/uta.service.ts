import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Parser, parseString } from 'xml2js';

@Injectable()
export class UtaService {
  token = 'USBRM03BLNL';
  utaBaseUrl = 'http://api.rideuta.com/utartapi/StopMonitor?';

  getData(stopId: string): Observable<any> {
    const headers = new Headers();
    headers.append('Accept', 'application/xml');
    const route = '701';
    const svcUrl = `${this.utaBaseUrl}stopid=${stopId}&minutesout=20&onwardcalls=true&filterroute=${route}&usertoken=${this.token}&format=json`;
    return this.http.get(svcUrl, {headers: headers})
        .map(result => result)
        .catch(error => error);
}

  constructor(private http: Http) { }

}
