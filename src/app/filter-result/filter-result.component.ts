import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss']
})
export class FilterResultComponent implements OnInit {

  private subs = new Subscription();
  filteredData: any[] = [];
  toBeSearched: any = {};
  canShowPage: boolean = false;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadFilterData();
  }

  loadFilterData() {
    this.toBeSearched = JSON.parse(this.route.snapshot.params.data);
    this.toBeSearched.departDate = this.toBeSearched.departDate.substring(0, 10);
    this.toBeSearched.returnDate = this.toBeSearched.returnDate.substring(0, 10);
    this.apiService.loadFlightData().pipe(take(1)).subscribe(result => {
      this.filteredData = this.apiService.filterMyFlights(result, this.toBeSearched);
      this.canShowPage = true;
      console.log('filteredData', this.filteredData);
    })
  }

  back() {
    this.router.navigate(['flights'])
  }

}
