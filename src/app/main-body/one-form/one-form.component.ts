import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-one-form',
  templateUrl: './one-form.component.html',
  styleUrls: ['./one-form.component.scss']
})
export class OneFormComponent {
  name = new FormControl('');
  clicked = false;
  title = 'CRUD APPLICATION'
  addButtonTitle = 'ADD EMPLOYEE'

  constructor(private _dialog: MatDialog) {}

    openAddEditEmpForm(){
      this._dialog.open(EmpAddEditComponent )
    }
  
  

}
