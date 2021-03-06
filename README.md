Esta librería está basada en la [guía de estilos de la Junta de Castilla y León](https://www.jcyl.es/junta/guia/guia-estilos.html) para implementar los estilos mediante un componente Angular.

Con este componente podemos generar navegaciones con texto con o sin descripción.

Demo online: [StackBlitz](https://stackblitz.com/edit/angular-725tpz)

#Instalación
Debemos descargar desde el [Repositorio de la junta de Castilla y León](https://github.com/juntadecastillayleon) las carpetas de la guía de estilos, para poder importar los css, js, fuentes, etc.

Copiar todo dentro de assets, dejando la estructura así:
```
assets
    css
    js
    fonts
    img
```

##NPM
```shell
npm install jcyl-navegacion-texto
```

##Importación de dependencias

```js

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

/* Importación del módulo */
import { NavegacionTextoModule } from 'jcyl-navegacion-texto';

@NgModule({
  declarations: [AppComponent],
  imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        NavegacionTextoModule
        ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```