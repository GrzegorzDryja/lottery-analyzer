import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DrawsComponent } from './app-main/components/draws/draws.component';
import { AppMainInputComponent } from './app-main/components/input/input.component';
import { RowComponent } from './app-main/components/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent,
    DrawsComponent,
    AppMainInputComponent,
    RowComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppHeaderComponent]
})
export class AppModule { }
