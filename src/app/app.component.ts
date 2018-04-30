import { Component, ViewChild } from '@angular/core';
// import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { ListViewComponent } from '@syncfusion/ej2-ng-lists';
// import { GridComponent, CommandModel, EditService, EditSettingsModel } from '@syncfusion/ej2-ng-grids';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // @ViewChild('modalDialog')
  // public modalDialog: DialogComponent;

  @ViewChild('cartList')
  public cartList: ListViewComponent;

  // @ViewChild('cartGrid')
  // public cartGrid: GridComponent;
   public itemCount = 0;
  // public target = 'body';
  // public width = '75vw';
  // public height = '500px';
  // public header = `My Cart`;
  // public content = 'Your current software version is up to date.';
  //Initialize Button to open the modal Dialog
  // public buttons: Object[] = [{
  //   click: this.placeOrder.bind(this),
  //   buttonModel: { content: 'Place Order', cssClass: 'e-flat place-order-btn', isPrimary: true }
  // }];
  // public isModal: Boolean = true;
  // public animationSettings: Object = { effect: 'None' };
  // public hide: any;

  title = 'app';

  public showProductList = true;

  public disableCart = this.itemCount === 0;

  public showOrderList = false;
  // public commands: CommandModel[] = this.commands = [{
  //   type: 'delete',
  //   buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }
  // }];
  // public editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'normal' };
   public data: Object = [
    {
      socialMedia: 'Redmi 4 (Black, 16GB)',
      description: 'Android v6.0.1 Marshmallow operating system with up to 1.4GHz Qualcomm Snapdragon 435 octa core processor with Adreno 505 GPU, 2GB RAM, 16GB internal memory expandable up to 128GB and dual SIM (micro+nano) dual-standby (4G+4G)',
      id: 'media1'
    },
    {
      socialMedia: 'Samsung Galaxy J7 Prime (Gold, 32GB)',
      description: 'Android v6.0 Marshmallow operating system with 1.6GHz Exynos 7870 octa core processor, 3GB RAM, 32GB internal memory expandable up to 256GB and dual SIM dual-standby (4G+4G)',
      id: 'media2'
    },
    {
      socialMedia: 'Nokia 6 (Matte Black, 32GB)',
      description: 'Android v7.1.1 Nougat OS with Qualcomm Snapdragon 430 octa core processor. 3 GB RAM, 32 GB internal memory and dual-standby (4G+4G) with Micro SD card hybrid support',
      id: 'media4'
    },
    {
      socialMedia: 'Lenovo K8 Note (Venom Black, 4GB)',
      description: 'Android v7.1.1 Nougat operating system with 2.3GHz Helio X23 10-core processor. 13.97 (5.5-inch) Full HD (1920 x 1080) IPS touchscreen with Gorilla Glass protection. 4GB RAM and 64GB internal memory expandable up to 128GB. Dual nano SIM with dual-standby (4G+4G)',
      id: 'media5'
    },
    {
      socialMedia: 'Google Pixel 2 (Clearly White 64GB-4GB RAM)',
      description: 'Sim - Nano-SIM card & eSIM | Dimension - 145.7 x 69.7 x 7.8 mm | Weight- 143 g | Display Type- AMOLED capacitive touchscreen, 16M colors | Size- 5.0 inches | Resolution- 1080 x 1920 pixels | Protection- Corning Gorilla Glass 5. OS- Android 8.0 | Chipset- Qualcomm MSM8998 Snapdragon 835 | CPU- Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) | GPU- Adreno 540 | Card Slot- No | Internal- 64 GB, 4 GB RAM. 12.2MP Rear Camera | 8MP Front Camera',
      id: 'media6'
    },
    {
      socialMedia: 'Apple iPhone X (Space Grey, 64GB)',
      description: '5.8-inch (diagonal) Super Retina HD Display. All-screen OLED Multi-Touch display with HDR Technology, 2436x1125 -pixel resolution at 458 ppi with 1,000,000:1 contrast ratio (typical), 3D touch with True Tone display',
      id: 'media7'
    },
    {
      socialMedia: 'Dell 18.5 inch Monitor (1918H)',
      description: 'The value-packed, budget-friendly E1912H monitor with LED can help your business realize a new level of productivity. Look to it to keep pace with the day-to-day duties your organization demands.',
      id: 'media8'
    },
    {
      socialMedia: 'Apple iPad Tablet (9.7 inch, 32GB, Wi-Fi), Space Grey',
      description: '9.7-inch (24.64 centimeters) LED Backlit Display with IPS Technology, Fingerprint-resistant Oleophobic Coating with 2048 x 1536 pixels resolution and 264 ppi pixel density',
      id: 'media9'
    },
  ];

  public orderData: Object = [];

  public dglorderData: Object = [];

  public fields: Object = { text: 'socialMedia' };

  private selectedItem = '';

  constructor(private http: HttpClient) { }

  public addToCart = function addtocart(id) {
    this.selectedItem = this.data.filter(d => d.id === id)[0].id;
    const addedItem = this.orderData.filter(odr => odr.id === id);
    if (this.orderData.length > 0 && addedItem.length > 0) {
      this.orderData = this.orderData.map((od) => {
        od.count = od.id === this.selectedItem ? od.count + 1 : od.count;
        return od;
      });
    } else {
      this.orderData.push(this.data.filter(d => d.id === id).map((od) => {
        od.count = 1;
        return od;
      })[0]);
    }
    this.itemCount++;
    this.disableCart = this.itemCount === 0;
  };

  public removeFromCart = function removefromcart(id) {
    this.itemCount -= this.orderData.filter(od => od.id === id)[0].count;
    this.orderData = this.orderData.filter(od => od.id !== id);
    // this.cartList.reRender();
    this.disableCart = this.itemCount === 0;
  };

  public openOrder = function openorder() {
    // this.cartList.reRender();
    if (this.itemCount > 0) {
      // this.cartGrid.refresh();
      // this.modalDialog.show();
    }

  };

  placeOrder() {
    debugger;
    // this.modalDialog.hide();
    this.showOrderList = true;
    const body = { name: 'Brad' };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const value = JSON.stringify(this.orderData);
    // {
    //   headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
    // }
    this.http
      .post('http://localhost:3000/api', { orderitems: this.orderData }).subscribe(
      data => {
        this.orderData = [];
        this.itemCount = 0;
        this.showOrderList = false;
        this.disableCart = this.itemCount === 0;
        console.log(data);
        alert('Order Placed Successfully.');
      },
      err => {
        this.showOrderList = false;
        console.log(err);
        alert('Placing Order failed.');
      }
      );
    // this.http
    //   .post(
    //   'http://localhost:60844/api/cart/placeorder',
    //   value, {
    //     params: new HttpParams().set('selectedItems', value),
    //   })
    //   .subscribe(
    //   data => {
    //     this.orderData = [];
    //     this.itemCount = 0;
    //     this.showOrderList = false;
    //     this.disableCart = this.itemCount === 0;
    //     console.log(data);
    //     alert(data);
    //   },
    //   err => {
    //     this.showOrderList = false;
    //     console.log(err);
    //     alert(err);
    //   });
    // setTimeout(() => {
    //   this.orderData = [];
    //   this.itemCount = 0;
    //   this.showOrderList = false;
    //   this.disableCart = this.itemCount === 0;
    // }, 2000);
  }

  public modalDlgOpen = function modaldlgopen() {

  };

  public modalDlgClose = function modaldlgclose() {

  };

  public overlayClick = function overlayclick() {
    // this.modalDialog.hide();
  };

}
