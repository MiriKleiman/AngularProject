import { Component, OnInit } from '@angular/core';
import { ConnectApiService } from '../connect-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor( private router:Router){
  }
  ngOnInit(): void {
    sessionStorage.clear();
    console.log(sessionStorage)
    alert("המנוי שלך נמחק בהצלחה")
    this.router.navigate([""])

  }



}
