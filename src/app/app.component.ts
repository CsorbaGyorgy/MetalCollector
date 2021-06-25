import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
// import { NgbCarouselConfig,  } from '@ng-bootstrap/ng-bootstrap';

@Component({ 
    selector: 'app', 
    templateUrl: 'app.component.html',  
    styleUrls: ['./app.component.css'],
    // providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class AppComponent {
    title = 'MY-METAL-COLLECTOR';
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}