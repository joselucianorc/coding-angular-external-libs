import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeButtonModule,
    MaterializeCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
