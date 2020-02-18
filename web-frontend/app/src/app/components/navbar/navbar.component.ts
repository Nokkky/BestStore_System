import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { StoreManagerService } from '../../services/store-manager.service';
import { Salesperson } from '../../models/Salesperson';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  name: string;
  salesperson_id: string;
  job_title: string;
  store_id: string;
  // isSalesperson: boolean;
  // isStoreManager: boolean;
  isRegionManager: boolean;
  isSalesperson: boolean;
  isStoreManager: boolean;
  salespersons: Salesperson[];
  sidebarVisible: boolean;
  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private storeManagerService: StoreManagerService,
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.salesperson_id = window.localStorage.getItem('salesperson_id');
    this.job_title = window.localStorage.getItem('job_title');
    // console.log(this.job_title);
    if (this.job_title == 'region_manager') {
      this.isRegionManager = true;
      this.isStoreManager = false;
      this.isSalesperson = false;
    }
    else if (this.job_title == 'store_manager') {
      this.isRegionManager = false;
      this.isStoreManager = true;
      this.isSalesperson = false;
    }
    else if (this.job_title == null) {
      this.isRegionManager = false;
      this.isStoreManager = false;
      this.isSalesperson = false;
    } else {
      this.isRegionManager = false;
      this.isStoreManager = false;
      this.isSalesperson = true;
    }
    if (this.salesperson_id != null) {
      this.isLoggedIn = true;
      this.storeManagerService.getSalesperson(this.salesperson_id).subscribe(salespersons => {
        this.isLoggedIn = true;
        this.name = salespersons[0]['name'];
        this.job_title = salespersons[0]['job_title'];
        this.store_id = salespersons[0]['store_id'];
        this.salesperson_id = salespersons[0]['salesperson_id'];
      });
    } else {
      this.isLoggedIn = false;
      this.router.navigate(['']);
    }
  }
  onLogoutClick() {
    window.localStorage.removeItem('salesperson_id');
    window.localStorage.removeItem('job_title');
    window.localStorage.removeItem('store_id');
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success', timeout: 1500
    });
    this.router.navigate(['']);
  }

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  sidebarOpen() {

    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];

    html.classList.add('nav-open');
    if (window.innerWidth < 991) {
      mainPanel.style.position = 'fixed';
    }
    this.sidebarVisible = true;
  };
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    if (window.innerWidth < 991) {
      setTimeout(function () {
        mainPanel.style.position = '';
      }, 500);
    }
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };
}
