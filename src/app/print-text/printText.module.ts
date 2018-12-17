import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import {PrintTextPageComponent} from './print-text-page/print-text-page';


const routes: Routes = [{ path: '', component: PrintTextPageComponent }];

@NgModule({
  declarations: [
    PrintTextPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
   RouterModule.forChild(routes)
  ],
  providers: [

  ]

})
export class PrintTextModule {}
