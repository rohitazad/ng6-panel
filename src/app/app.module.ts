import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppRouting } from 'src/app/app.routing';

import { TodoService } from 'src/app/application/services/todo.service';
import { CanDeactivateGuard } from 'src/app/share/guards/can-deactivate-guard.service';
import { QuizesService } from 'src/app/application/services/quizes.service';





@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule,
    AppRouting
  ],
  providers: [
    TodoService,
    CanDeactivateGuard,
    QuizesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
