import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.scss'
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError: string = "";
  signup: string | undefined

  constructor() {
  }
  dat: any
  ngOnInit(): void {

  }
  signUp(data:any): void {
  }
  login(data: any) {
   
  }
  openLogin() {
    this.showLogin = true
  }
  openSignUp() {
    this.showLogin = false
  }

}
