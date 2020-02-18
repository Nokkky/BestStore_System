import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Salesperson } from '../../models/Salesperson';
import * as moment from "moment";
import { LoginToken } from 'src/app/models/LoginToken';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  salespersons: LoginToken;
  salesperson_id: string;
  job_title: string;
  store_id: string;
  @ViewChild('loginForm') form: any;
  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.salesperson_id = window.localStorage.getItem('salesperson_id');
    if (this.salesperson_id != null) {
      this.router.navigate(['/welcome']);
    }
  }
  onSubmit({ value, valid }: { value: LoginToken, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the login form correctly', {
        cssClass: 'alert-danger', tmeout: 1500
      });
    } else {
      console.log(value as LoginToken);
      this.loginService.login(value as LoginToken)
      .subscribe(salespersons => {
        this.salespersons = salespersons;
        this.salesperson_id = this.salespersons.salesperson_id;
        this.job_title = this.salespersons.job_title;
        this.store_id = this.salespersons.store_id;
        var token = this.salespersons.token;
        window.localStorage.setItem('salesperson_id', this.salesperson_id)
        window.localStorage.setItem('job_title', this.job_title)
        window.localStorage.setItem('store_id', this.store_id)
        window.localStorage.setItem('token', token)
        const accessTokenExpiresAt = moment().add(1, "days");
        localStorage.setItem(
          "access_token_expires_at",
          JSON.stringify(accessTokenExpiresAt.valueOf())
        );
        // if (this.salespersons[0]['job_title'] == 'salesperson') { 

        // }
        // else if (this.salespersons[0]['job_title'] == 'salesperson') {

        //  }
        // else if (this.salespersons[0]['job_title'] == 'salesperson') { 

        // }
        this.flashMessage.show('Login successfully', {
          cssClass: 'alert-success', timeout: 1500
        });
        this.router.navigate(['/welcome']);
        return location.reload();
      },
      err =>{
        this.flashMessage.show('Username or Password is wrong', {
          cssClass: 'alert-danger', timeout: 1500
        });
      });
    }
  }
}
