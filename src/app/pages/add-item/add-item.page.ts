import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage {
  itemName: string = '';
  itemPrice: number = 0;
  itemDescription: string = '';

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) {}

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Notification',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  addItem() {
    const newItem = { name: this.itemName, price: this.itemPrice, description: this.itemDescription };
    this.http.post('http://localhost:3000/items', newItem).subscribe(() => {
      this.itemName = '';
      this.itemPrice = 0;
      this.itemDescription = '';
      this.router.navigate(['/tabs/store']).then(() => {
        window.location.reload();
      });
      this.presentAlert('Item added successfully');
    });
  }
}
