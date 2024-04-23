import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.scss'
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError: string = "";
  signup: string | undefined

  constructor(private router: Router) {
  }
  dat: any
  ngOnInit(): void {

  }
  signUp(data: any): void {
  }
  login(data: any) {
    console.log("dataa", data);
    if (data.email === "admin@gmail.com" && data.password === "Admin@123") {
      sessionStorage.setItem("isLogedin",'true')
      this.router.navigate(['products']);
    } else {
      sessionStorage.setItem("isLogedin",'false')
      alert("Please enter correct Email and Password");
    }
  }
  openLogin() {
    this.showLogin = true
  }
  openSignUp() {
    this.showLogin = false
  }

}
