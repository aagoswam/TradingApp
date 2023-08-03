import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-two-table',
  templateUrl: './two-table.component.html',
  styleUrls: ['./two-table.component.scss']
})
export class TwoTableComponent {
  Application_Title = "Boston House Price Prediction";
  empForm: FormGroup;
  onFormSubmit(){

  }
}
