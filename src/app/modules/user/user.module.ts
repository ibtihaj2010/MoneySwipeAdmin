import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, UsersRoutingModule } from './user-routing.module';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
    ],
    providers: [],
    declarations: [routedComponents]
})

export class UsersModule { }
