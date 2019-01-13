import { Injectable, TemplateRef, ElementRef, Injector, InjectionToken } from '@angular/core';
import { Overlay, OverlayRef, OriginConnectionPosition, OverlayConnectionPosition, PositionStrategy } from '@angular/cdk/overlay';
import { PortalOption } from './portal.type';
import { TemplatePortal, ComponentPortal, ComponentType, PortalInjector } from '@angular/cdk/portal';

/**
 * 
 * 
 * @export
 * @class PortalService
 */
@Injectable()
export class PortalService {

    constructor(
        private overlay: Overlay,
        private injector: Injector) { }

    create(content: TemplateRef<any> | ComponentType<any>, option?: PortalOption, connectRef?: ElementRef): OverlayRef {
        let overlayRef = this.createOverlayRef(option, connectRef);

        if (content instanceof TemplateRef) {
            overlayRef.attach(new TemplatePortal(content, option.viewContainerRef, option.context));
        } else {
            let componentPortal = new ComponentPortal(content, null, option.injector, option.componentFactoryResolver);
            option.componentPortal = componentPortal;
            overlayRef.attach(componentPortal);
        }

        return overlayRef;
    }

    createInjector(data, token: InjectionToken<any>): PortalInjector {
        const injectorTokens = new WeakMap();
        injectorTokens.set(token, data);
        return new PortalInjector(this.injector, injectorTokens);
    }

    private createOverlayRef(option?: PortalOption, connectRef?: ElementRef): OverlayRef {
        let overlayRef: OverlayRef;
        let strategy: PositionStrategy;
        if (connectRef) {
            let originPos: OriginConnectionPosition = { originX: 'start', originY: 'bottom' };
            let overlayPos: OverlayConnectionPosition = { overlayX: 'start', overlayY: 'top' }
            strategy = this.overlay.position().connectedTo(connectRef,
                option && option.originPos ? option.originPos : originPos,
                option && option.overlayPos ? option.overlayPos : overlayPos)
        } else {
            strategy = this.overlay.position().global()
                .width(`${option.width}px`).height(`${option.height}px`)
                .centerHorizontally().centerVertically();
        }
        overlayRef = this.overlay.create({
            panelClass: option.panelClass,
            positionStrategy: strategy,
            hasBackdrop: option.hasBackdrop,
            backdropClass: option.backdropClass
        })

        return overlayRef;
    }

}


