import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isSalesperson: boolean;
  isStoreManager: boolean;
  isRegionManager: boolean;
  job_title: string;
  constructor() { }
  ngOnInit() {
    // this.isRegionManager = true;
    // this.isStoreManager = true;
    // this.isSalesperson = true;
    this.job_title = window.localStorage.getItem('job_title');
    console.log(this.job_title);
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
  }
  changeColor0() {
    document.getElementById('cs0').style.color = '#EB5E28';
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor1() {
    document.getElementById('cs0').style.color = '#66615B';
    document.getElementById('cs1').style.color = '#EB5E28';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor2() {
    document.getElementById('cs0').style.color = '#66615B';
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#EB5E28';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor3() {
    document.getElementById('cs0').style.color = '#66615B';
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#EB5E28';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor4() {
    document.getElementById('cs0').style.color = '#66615B';
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#EB5E28';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor5() {
    document.getElementById('cs0').style.color = '#66615B';
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#EB5E28';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor6() {
    document.getElementById('cs0').style.color = '#66615B';
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#EB5E28';
    document.getElementById('cs7').style.color = '#66615B';
  }
  changeColor7() {
    document.getElementById('cs0').style.color = '#66615B';
    document.getElementById('cs1').style.color = '#66615B';
    document.getElementById('cs2').style.color = '#66615B';
    document.getElementById('cs3').style.color = '#66615B';
    document.getElementById('cs4').style.color = '#66615B';
    document.getElementById('cs5').style.color = '#66615B';
    document.getElementById('cs6').style.color = '#66615B';
    document.getElementById('cs7').style.color = '#EB5E28';
  }
}
