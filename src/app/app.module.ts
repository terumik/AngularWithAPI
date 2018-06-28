import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorSortComponent } from './color-sort/color-sort.component';
import { BrushSortComponent } from './brush-sort/brush-sort.component';
import { HeaderComponent } from './header/header.component';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app-routing';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorSortComponent,
    BrushSortComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
