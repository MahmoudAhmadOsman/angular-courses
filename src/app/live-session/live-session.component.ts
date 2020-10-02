import { SessionService } from './../service/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-session',
  templateUrl: './live-session.component.html',
  styleUrls: ['./live-session.component.scss'],
})
export class LiveSessionComponent implements OnInit {
  title: string = 'Live Session ';

  //Inject the Session Service here
  sessions: any[];
  constructor(SessionService: SessionService) {
    //Now subscribe to the session
    SessionService.getSesstion().subscribe(
      (res) => {
        console.log(res);
        //this.sessions = res;
        this.sessions = res;
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  ngOnInit(): void {}
}
