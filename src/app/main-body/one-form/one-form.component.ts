import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-one-form',
  templateUrl: './one-form.component.html',
  styleUrls: ['./one-form.component.scss']
})
export class OneFormComponent {
  name = new FormControl('');

  constructor(private fb: FormBuilder) {
  
  }

}
