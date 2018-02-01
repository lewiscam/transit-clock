import { UtaService } from './uta.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  stopInfo: any;
  direction: string;
  stopName: string;
  timeToDeparture: number;

  getTime() {
    this.svc.getData('TX153049').subscribe((data: any) => {
      this.stopInfo = JSON.parse(data._body);
      this.stopInfo = this.stopInfo.serviceDelivery.stopMonitoringDelivery;
      this.stopName = this.stopInfo.extensions.stopName;
      this.direction = this.stopInfo.monitoredStopVisit[0].monitoredVehicleJourney.directionName[0].value;
      this.timeToDeparture = Math.trunc(this.stopInfo.monitoredStopVisit[0].monitoredVehicleJourney.monitoredCall.extensions.estimatedDepartureTime / 60);
    });
  }

  constructor(private svc: UtaService) { }

  ngOnInit() {
    this.getTime();

    IntervalObservable.create(60 * 1000)
      .subscribe(() => {
        this.getTime();
      });
  }
}
