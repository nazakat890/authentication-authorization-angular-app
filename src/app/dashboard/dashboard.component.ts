import { Component, OnInit } from '@angular/core';
import { IFormStructure } from '../form.interface';
import { formConfig } from '../form.config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  formStructure: IFormStructure[] = formConfig;
  dynamicForm:FormGroup = this.fb.group({})

  constructor(private fb:FormBuilder) { 
    let formGroup: Record<string, any> = {};
    this.formStructure.forEach((control) => {
    let controlValidators: Validators[] = [];
    if(control.validations) {
      control.validations.forEach((Validation:{ name:string; validator:string;  message:string; }) => {
         if(Validation.validator === 'required') {
          controlValidators.push(Validators.required);
         }
         if(Validation.validator === 'email') {
          controlValidators.push(Validators.email)
         }

      });
    
    }
    formGroup[control.name] = [control.value || '', controlValidators]
  });
     this.dynamicForm = this.fb.group(formGroup)
      console.log(this.dynamicForm)
    }
  ngOnInit(): void {
  }

}
