import { Component, OnInit, Input } from '@angular/core';
import { NavegacionTexto } from './navegacion-texto-models';

@Component({
    selector: 'jcyl-navegacion-texto',
    templateUrl: './navegacion-texto.component.html',
    styleUrls: ['./navegacion-texto.component.scss']
})
export class NavegacionTextoComponent implements OnInit {
    @Input() config: NavegacionTexto[];

    constructor() { }

    ngOnInit() {
    }

}
