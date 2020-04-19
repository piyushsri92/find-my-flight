import { Component, OnInit, Input } from '@angular/core';
import { ITabConfig } from './tab-factory.models';

@Component({
  selector: 'app-tab-factory',
  templateUrl: './tab-factory.component.html',
  styleUrls: ['./tab-factory.component.scss']
})
export class TabFactoryComponent implements OnInit {
  @Input() tabs: ITabConfig[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
