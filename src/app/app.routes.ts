import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlogComponent } from './components/blog/blog.component';
import { EventosComponent } from './components/eventos/eventos.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'quienes-somos', component: QuienessomosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'ofertas', component: OfertasComponent },
    { path: 'carta-menu', component: MenuComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'eventos', component: EventosComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);