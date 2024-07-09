import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from './featch-dta/user.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatchDtaComponent } from './featch-dta/featch-dta.component';
import { SamplecomComponent } from './samplecom/samplecom.component';
import { CalculatorComponent } from './calculator/calculator_component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ChartComponent } from '../app/chart-component/chart-component.component';
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
    BrowserAnimationsModule, 
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule 
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
