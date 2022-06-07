import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  showSideBar = false;
  subscription:Subscription;




  constructor(
     private _route:Router,
     private _activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  toggleMenuBtn() {
    this.showSideBar = !this.showSideBar;
  }

}
