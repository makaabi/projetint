import { Component, OnInit } from '@angular/core';
import {AuthenService} from 'src/app/services/authen.service';
import { Router } from '@angular/router';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erreur:string='';
   users:any[];


  constructor(private router: Router,private aus:AuthenService,private us: UserService) { }

  ngOnInit() {
    this.us.getAllUsers().subscribe(data=>this.users=data)
  }

  login(form) {
    let data = form.value
    this.aus.login(data.email, data.password)
      .then(res => {
        this.us.redirect(res.user.uid,this.users)
      })
      .catch(err => this.erreur=err.message)
  }

}
