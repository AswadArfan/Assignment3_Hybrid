import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  items: any[] = [];
  isEditModalOpen: boolean = false;
  selectedItem: any = { id: null, name: '', price: 0, description: '' };

  constructor(private http: HttpClient, private alertController: AlertController) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.http.get('http://localhost:3000/items').subscribe((data: any) => {
      this.items = data;
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Notification',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  editItem(item: any) {
    this.selectedItem = { ...item };
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }

  updateItem() {
    this.http.put(`http://localhost:3000/items/${this.selectedItem.id}`, this.selectedItem).subscribe(() => {
      this.isEditModalOpen = false;
      this.loadItems();
      this.presentAlert('Item updated successfully');
    });
  }

  deleteItem(id: any) {
    this.http.delete(`http://localhost:3000/items/${id}`).subscribe(() => {
      this.loadItems();
      this.presentAlert('Item deleted successfully');
    });
  }
}
