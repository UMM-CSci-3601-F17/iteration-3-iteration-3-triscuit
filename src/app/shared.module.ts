import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';

import {
    CovalentLayoutModule, CovalentStepsModule, CovalentCommonModule,
    CovalentMessageModule /*, any other modules */
} from '@covalent/core';

import {
    MatListModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MatInputModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    MdSnackBarModule,
    MatExpansionModule,
    MatSelectModule
} from '@angular/material';

import { FlexLayoutModule, } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PageSliderModule} from "ng2-page-slider";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {NgPipesModule} from "ngx-pipes";
import {NgxQRCodeModule} from "ngx-qrcode2";
import {ClipboardModule} from "ngx-clipboard/dist";
import {MatChipsModule} from '@angular/material/chips';
import {CovalentChipsModule} from '@covalent/core';

const FLEX_LAYOUT_MODULES: any[] = [
    FlexLayoutModule,
];

const ANGULAR_MODULES: any[] = [
    BrowserAnimationsModule,
    FormsModule,
];

const MATERIAL_MODULES: any[] = [
    MatListModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdCardModule,
    MdMenuModule,
    MdSidenavModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    MdSnackBarModule,
    MatExpansionModule,
    MatSelectModule,
    MatChipsModule
];

const COVALENT_MODULES: any[] = [
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentCommonModule,
    CovalentMessageModule,
];

const OTHER_MODULES: any[] = [
    PageSliderModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgPipesModule,
    NgxQRCodeModule,
    ClipboardModule,
    CovalentChipsModule
];


@NgModule({
    imports: [
        CommonModule,
        ANGULAR_MODULES,
        MATERIAL_MODULES,
        COVALENT_MODULES,
        FLEX_LAYOUT_MODULES,
        OTHER_MODULES,

    ],
    declarations: [

    ],
    exports: [
        ANGULAR_MODULES,
        MATERIAL_MODULES,
        COVALENT_MODULES,
        FLEX_LAYOUT_MODULES,
        OTHER_MODULES,
    ]
})

export class SharedModule {
}
