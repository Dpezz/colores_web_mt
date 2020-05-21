import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ColorComponent } from './components/color/color.component';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
    declarations: [AppComponent, ColorComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        ClipboardModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
