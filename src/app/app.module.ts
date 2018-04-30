import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';
import { ListViewModule } from '@syncfusion/ej2-ng-lists';
import { ButtonAllModule } from '@syncfusion/ej2-ng-buttons';
// import { DialogAllModule } from '@syncfusion/ej2-ng-popups';
// import { GridAllModule } from '@syncfusion/ej2-ng-grids';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpClientModule,
    ListViewModule,
    ButtonAllModule,
    // DialogAllModule,
    // GridAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
