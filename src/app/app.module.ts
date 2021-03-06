import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';


import { AppComponent } from './app.component';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PassPipe } from './pipes/pass.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    DomseguroPipe,
    PassPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
