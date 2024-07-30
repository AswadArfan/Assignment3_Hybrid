import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  authMode = 'login';
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) {}

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Notification',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  onSubmit() {
    if (this.authMode === 'login') {
      this.login();
    } else {
      this.signup();
    }
  }

  login() {
    const credentials = { username: this.username, password: this.password };
    this.http.post('http://localhost:3000/login', credentials).subscribe(
      response => {
        if (response) {
          this.router.navigate(['/tabs/store']);
          this.presentAlert('Login successful');
        } else {
          this.presentAlert('Login failed');
        }
      },
      error => {
        this.presentAlert('Login failed');
      }
    );
  }

  signup() {
    const newUser = { username: this.username, password: this.password };
    this.http.post('http://localhost:3000/signup', newUser).subscribe(() => {
      this.router.navigate(['/tabs/store']);
      this.presentAlert('Signup successful');
    });
  }
}
