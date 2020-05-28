import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlogComponent } from './components/blog/blog.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { UbicanosComponent } from './components/ubicanos/ubicanos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    QuienessomosComponent,
    ProductosComponent,
    OfertasComponent,
    MenuComponent,
    BlogComponent,
    EventosComponent,
    UbicanosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
