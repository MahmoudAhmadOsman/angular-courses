import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private htpp: HttpClient) {}
  //Now create a session function that calls the endpoint api
  getSesstion(): Observable<any> {
    const url =
      'http://www.csi-event.com:8088/csi/event/services/eventSetup/getAllDistinctEvents';
    return this.htpp.get(url);
  }
}
