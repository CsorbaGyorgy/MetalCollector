import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { AdminpageComponent } from './adminpage.component';
import { BandDetailComponent } from './band-detail.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        UsersRoutingModule
    ],
    declarations: [
        LayoutComponent,
        BandDetailComponent,
        AdminpageComponent
    ]
})
export class UsersModule { }