import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { BtnDeleteDirective } from './btn-delete.directive';
import { BtnConfirmDirective } from './btn-confirm/btn-confirm.directive';
import {ContactDataService} from './contact-data.service';
import { ContactData2Service } from './contact-data2.service';
import { ContactData3Service } from './contact-data3/contact-data3.service';
import { ConvertToInchesPipe } from './convert-to-inches.pipe';
import { ConvertToInches2Pipe } from './convert-to-inches2/convert-to-inches2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    BtnDeleteDirective,
    BtnConfirmDirective,
    ConvertToInchesPipe,
    ConvertToInches2Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactDataService, ContactData2Service, ContactData3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
