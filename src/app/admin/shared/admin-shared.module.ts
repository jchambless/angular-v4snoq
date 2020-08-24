import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PasswordModule} from 'primeng/password';
import {EditorModule} from 'primeng/editor';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputSwitchModule} from 'primeng/inputswitch';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TreeModule} from 'primeng/tree';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    RadioButtonModule,
    PasswordModule,
    EditorModule,
    MultiSelectModule,
    InputSwitchModule,
    AutoCompleteModule,
    TreeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    RadioButtonModule,
    PasswordModule,
    EditorModule,
    MultiSelectModule,
    InputSwitchModule,
    AutoCompleteModule,
    TreeModule
  ]
})
export class AdminSharedModule {}