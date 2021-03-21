import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppFooterComponent } from './footer/footer.component';
import { DrawsComponent } from './app-main/draws/draws.component';
import { AppMainInputComponent } from './app-main/input/input.component';
import { RowComponent } from './app-main/row/row.component';
import { OutputComponent } from './app-main/output/output.component';
import { NumbersComponent } from './app-main/numbers/numbers.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent,
    DrawsComponent,
    AppMainInputComponent,
    RowComponent,
    OutputComponent,
    NumbersComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppHeaderComponent, DrawsComponent]
})
export class AppModule { }
