import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountCreateComponent } from './components/account/account-create/account-create.component';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';
import { ContactCreateComponent } from './components/contact/contact-create/contact-create.component';
import { LeadListComponent } from './components/lead/lead-list/lead-list.component';
import { OpportunityListComponent } from './components/opportunity/opportunity-list/opportunity-list.component';
import { LeadCreateComponent } from './components/lead/lead-create/lead-create.component';
import { OpportunityCreateComponent } from './components/opportunity/opportunity-create/opportunity-create.component';

const routes: Routes = [
  { path:  '', redirectTo:  'accounts', pathMatch:  'full' },
  {
    path:  'accounts',
    component:  AccountListComponent
  },
  {
    path:  'create-account',
    component:  AccountCreateComponent
  },
  {
    path:  'contacts',
    component:  ContactListComponent
  },
  {
    path:  'create-contact',
    component:  ContactCreateComponent
  },
  {
    path:  'leads',
    component:  LeadListComponent
  },
  {
    path:  'create-lead',
    component:  LeadCreateComponent
  },
  {
    path:  'opportunities',
    component:  OpportunityListComponent
  },
  {
    path:  'create-opportunity',
    component:  OpportunityCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
