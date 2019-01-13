import { OriginConnectionPosition, OverlayConnectionPosition } from "@angular/cdk/overlay";
import { Injector, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { ComponentPortal } from "@angular/cdk/portal";

export interface PortalOption {
    hasBackdrop?: boolean;
    backdropClass?: string;
    panelClass?: string;
    originPos?: OriginConnectionPosition;
    overlayPos?: OverlayConnectionPosition;
    width?: number;
    height?: number;
    injector?: Injector;
    viewContainerRef?: ViewContainerRef;
    componentFactoryResolver?: ComponentFactoryResolver;
    componentPortal?: ComponentPortal<any>;
    context?: any;
    detach?: Function;
}