import { Directive, TemplateRef, OnInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[fpOnlyForLoggedIn]'
})
export class OnlyForLoggedInDirective implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor(private temp: TemplateRef<any>, private vcr: ViewContainerRef, private auth: AuthService) {

   }

  ngOnInit() {

    this.subscription = this.auth.isLoggedIn$.subscribe( isLoggedIn => {
      this.vcr.clear();
      if (isLoggedIn) {
        this.vcr.createEmbeddedView(this.temp)
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
