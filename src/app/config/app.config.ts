import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionService } from './services/transaction.service';
import { AppConfig } from './config/app.config';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TransactionService,
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }