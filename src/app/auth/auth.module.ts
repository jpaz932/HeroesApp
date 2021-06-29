import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AuthRouthingModule } from './auth-routhing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        AuthRouthingModule,
        MaterialModule
    ]
})
export class AuthModule { }
