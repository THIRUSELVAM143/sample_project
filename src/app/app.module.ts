import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserService } from '../app/featch-dta/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatchDtaComponent } from './featch-dta/featch-dta.component';
import { SamplecomComponent } from './samplecom/samplecom.component';
import { CalculatorComponent } from './calculator/calculator_component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ChartComponent } from '../app/chart-component/chart-component.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatchDtaComponent,
    SamplecomComponent,
    CalculatorComponent,
    StopwatchComponent,
    ChartComponent,
    DateRangePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
