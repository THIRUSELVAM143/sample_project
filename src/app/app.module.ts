import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserService } from '../app/featch-dta/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatchDtaComponent } from './featch-dta/featch-dta.component';
import { SamplecomComponent } from './samplecom/samplecom.component';
import { CalculatorComponent } from './calculator/calculator_component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';


@NgModule({
  declarations: [
    AppComponent,
    FeatchDtaComponent,
    SamplecomComponent,
    CalculatorComponent,
    StopwatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
