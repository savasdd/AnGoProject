import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [ProfileEditComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class ProfileModule { }
