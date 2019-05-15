import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

const sharedComponents = [
    NavbarComponent,
    SidebarComponent,
    FooterComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: sharedComponents,
    exports: sharedComponents,
    entryComponents: [],
    providers: []
})
export class SharedModule { }