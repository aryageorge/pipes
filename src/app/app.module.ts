import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentServiceComponent } from './student-service/student-service.component';
import { PrefixPipe } from './prefix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentServiceComponent,
    PrefixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
