import { Routes } from '@angular/router';
import { StylingComponent } from './core/styling/styling.component';
import { PhotographyComponent } from './core/photography/photography.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

export const routes: Routes = [
    { path: '', component: StylingComponent },
    { path: 'photography', component: PhotographyComponent },
    { path: 'contacts', component: ContactsComponent },
    { path : 'styling', redirectTo: '' },
    { path: '**', component: NotfoundComponent }
];
