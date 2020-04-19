import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cities, ICity, IClassTypes, ClassTypes, PassengerTypes, IPassengerTypes } from './filter-form.model';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {

  registerFilterForm: FormGroup;
  submitted = false;

  departureCities: ICity[] = Cities;
  destinationCities: ICity[] = Cities;
  classTypes: IClassTypes[] = ClassTypes;
  passengerTypes: IPassengerTypes[] = PassengerTypes;

  departMinDate: Date = new Date();
  returnMinDate: Date = new Date();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildForm();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerFilterForm.controls; }

  buildForm() {
    this.registerFilterForm = this.formBuilder.group({
      departureCity: ['', Validators.required],
      destinationCity: ['', Validators.required],
      departDate: [new Date(), [Validators.required]],
      returnDate: [''],
      travellers: ['', [Validators.required]],
      passengerType: ['', [Validators.required]],
      classType: ['', [Validators.required]],
    });
  }

  dropdownSelect(type: string, e) { }

  selectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.returnMinDate = event.value;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerFilterForm.invalid) {
      return;
    }
    const param = { data: JSON.stringify(this.registerFilterForm.value) };
    this.router.navigate(['results', param]);
  }

}
