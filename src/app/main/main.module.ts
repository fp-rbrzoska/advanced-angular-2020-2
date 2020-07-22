import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavigationComponent, HomeComponent, PageNotFoundComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [ NavigationComponent, HomeComponent, PageNotFoundComponent, ContactComponent]
})
export class MainModule {
}
