import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'day10TemplateDrivenForms';

  emp =  new Employee(
    'Henry ',
    'Cavill',
    true,
    'W2'
    );

  ngOnInit(): void {
    console.log('Employee\'s name is ' + this.emp.firstName + this.emp.lastName)
  }
}
