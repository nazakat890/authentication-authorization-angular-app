import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!:FormGroup;
  token:any;

  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private authSvc:AuthService
  ) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      newPassword:['', Validators.required]

    })
    this.route.queryParams.subscribe((params:any) => {
      this.token = params['token'];
    })

  }

onSubmit() {
 if(this.resetForm.valid) {
  this.authSvc.resetPassword(this.resetForm.value, this.token).subscribe(
  (resp:any) => {
  }, (error:any) => {

  })
 }
}



}
