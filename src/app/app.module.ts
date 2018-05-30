import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountCreateComponent } from './components/account/account-create/account-create.component';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';
import { ContactCreateComponent } from './components/contact/contact-create/contact-create.component';
import { LeadListComponent } from './components/lead/lead-list/lead-list.component';
import { LeadCreateComponent } from './components/lead/lead-create/lead-create.component';
import { OpportunityListComponent } from './components/opportunity/opportunity-list/opportunity-list.component';
import { OpportunityCreateComponent } from './components/opportunity/opportunity-create/opportunity-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountCreateComponent,
    ContactListComponent,
    ContactCreateComponent,
    LeadListComponent,
    LeadCreateComponent,
    OpportunityListComponent,
    OpportunityCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
