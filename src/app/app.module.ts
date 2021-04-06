import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddValuePipe } from './add-value.pipe';
import { FilterComponent } from './filter/filter.component';
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ToolsComponent,
    AddValuePipe,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule ,
    MatFormFieldModule ,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
