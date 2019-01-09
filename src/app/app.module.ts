import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessTextComponent } from './components/success-text/success-text.component';
import { CardComponent } from './components/card/card.component';
import { ContentChildComponent } from './components/content-child/content-child.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessTextComponent,
    CardComponent,
    ContentChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
