import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';
import { DomHandler } from 'primeng/dom';
import { Subscription } from 'rxjs';
import { default as MenuData } from 'src/assets/showcase/data/menu.json';
import { AppConfig } from '../../domain/appconfig';
import { AppConfigService } from '../../service/appconfigservice';

export interface MenuItem {
    name?: string;
    icon?: string;
    children?: MenuItem[];
    routerLink?: string;
    href?: string;
}

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent {
    @Input() active: boolean;

    menu!: MenuItem[];

    config!: AppConfig;

    subscription!: Subscription;

    constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: any, private configService: AppConfigService, private el: ElementRef,) {
        this.menu = MenuData.data;
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe((config) => (this.config = config));
    }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                this.scrollToActiveItem();
            }, 1);
        }
    }

    scrollToActiveItem() {
        let activeItem = DomHandler.findSingle(this.el.nativeElement, '.router-link-active');
        if (activeItem && !this.isInViewport(activeItem)) {
            activeItem.scrollIntoView({ block: 'center' });
        }
    }

    getHomeUrl(){
        return this.document.getElementsByTagName('base')[0].href.toString();
    }

    isInViewport(element) {
        if (isPlatformBrowser(this.platformId)) {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || (document.documentElement.clientHeight && rect.right <= (window.innerWidth || document.documentElement.clientWidth)));
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
