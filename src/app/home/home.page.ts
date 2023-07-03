import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, MapComponent],
})
export class HomePage {
  constructor() {}
}
