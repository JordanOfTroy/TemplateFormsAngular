import { Component, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  @ViewChild('empForm') empForm: NgForm | any;

  model = new Employee(
    'Henry',
    'Cavill',
    true,
    'W2'
  );

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log('form submitted:', JSON.stringify(this.model));
    console.log('isValid:',this.empForm.valid)
  }

}
