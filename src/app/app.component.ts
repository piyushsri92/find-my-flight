import { Component } from '@angular/core';
import { ITabConfig } from './shared/tab-factory/tab-factory.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'find-my-flight';

  tabs: ITabConfig[] = [{
    'icon': 'local_airport',
    'title': 'Flights',
    'path': '/flights'
  }, {
    'icon': 'hotel',
    'title': 'Hotels',
    'path': '/hotels'
  }, {
    'icon': 'directions_car',
    'title': 'Cars',
    'path': '/cars'
  }, {
    'icon': 'flag',
    'title': 'Activity',
    'path': '/cars'
  }]
}
