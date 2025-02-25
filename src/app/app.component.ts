import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { BlancoComponent } from './blanco/blanco.component';
import { MenuComponent } from './menu/menu.component';
import { DerechoComponent } from './derecho/derecho.component';
import { DescargaComponent } from './descarga/descarga.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    AsideComponent,
    BlancoComponent,
    MenuComponent,
    DerechoComponent,
    DescargaComponent,
    FooterComponent,
    CommonModule,
    FormsModule
  ]
})
export class AppComponent {
  title = 'GoEats';
}