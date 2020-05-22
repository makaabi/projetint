import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private afAuth: AngularFireAuth) { }
  signup(email,password)
  {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password)
  {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)

  }
  logout()
  {
    return this.afAuth.auth.signOut()

  }
}
