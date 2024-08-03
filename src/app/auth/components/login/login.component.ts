import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { PermissionService } from 'src/app/um/services/permission.service';
import { UserService } from 'src/app/um/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  permissions:any[] = [];

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authSvc:AuthService,
    private storageSvc:StorageService,
    private userSvc:UserService
  ) { 
    this.loginForm = this.fb.group({
     username:['',[Validators.required]],
     password:['',[Validators.required]]
    })
  }


  ngOnInit(): void {
  }

getUserAuthority(){
 this.userSvc.getUserAuthority().subscribe((resp:any) => {
   this.permissions = resp.permissions ?? [];
 })
}
  onSubmit(): void {
    if(this.loginForm.valid) {
      this.authSvc.login(this.loginForm.value).subscribe({
      next: (resp) => {
         if(resp.body.token) {
          this.storageSvc.saveToken(resp.body.token)
          this.getUserAuthority()
          this.router.navigate(['/dashboard'])
         }
      },
      error: (err) => {
        alert(err.error.message)
      }
      })

    }
  }

}
