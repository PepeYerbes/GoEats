import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { BlancoComponent } from './blanco/blanco.component';
import { DerechoComponent } from './derecho/derecho.component';
import { DescargaComponent } from './descarga/descarga.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { VisualComponent } from './visual/visual.component';
import { AppStateService } from './services/app-state.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AsideComponent,
    BlancoComponent,
    DerechoComponent,
    DescargaComponent,
    HeaderComponent,
    MenuComponent,
    VisualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }