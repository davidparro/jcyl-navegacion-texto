import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavegacionTextoComponent } from './navegacion-texto.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [NavegacionTextoComponent],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [NavegacionTextoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavegacionTextoModule { }
