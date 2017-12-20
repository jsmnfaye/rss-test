/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "./app.module";
import * as i2 from "ionic-angular/components/app/app-root";
import * as i3 from "../../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory";
import * as i4 from "../../node_modules/ionic-angular/components/alert/alert-component.ngfactory";
import * as i5 from "../../node_modules/ionic-angular/components/app/app-root.ngfactory";
import * as i6 from "../../node_modules/ionic-angular/components/loading/loading-component.ngfactory";
import * as i7 from "../../node_modules/ionic-angular/components/modal/modal-component.ngfactory";
import * as i8 from "../../node_modules/ionic-angular/components/picker/picker-component.ngfactory";
import * as i9 from "../../node_modules/ionic-angular/components/popover/popover-component.ngfactory";
import * as i10 from "../../node_modules/ionic-angular/components/select/select-popover-component.ngfactory";
import * as i11 from "../../node_modules/ionic-angular/components/toast/toast-component.ngfactory";
import * as i12 from "./app.component.ngfactory";
import * as i13 from "../pages/rsspage/rsspage.ngfactory";
import * as i14 from "../pages/entry/entry.ngfactory";
import * as i15 from "@angular/common";
import * as i16 from "@angular/platform-browser";
import * as i17 from "ionic-angular/gestures/gesture-config";
import * as i18 from "@angular/http";
import * as i19 from "@angular/forms";
import * as i20 from "ionic-angular/components/action-sheet/action-sheet-controller";
import * as i21 from "ionic-angular/components/app/app";
import * as i22 from "ionic-angular/config/config";
import * as i23 from "ionic-angular/components/alert/alert-controller";
import * as i24 from "ionic-angular/util/events";
import * as i25 from "ionic-angular/util/form";
import * as i26 from "ionic-angular/tap-click/haptic";
import * as i27 from "ionic-angular/platform/platform";
import * as i28 from "ionic-angular/platform/keyboard";
import * as i29 from "ionic-angular/platform/dom-controller";
import * as i30 from "ionic-angular/components/loading/loading-controller";
import * as i31 from "ionic-angular/module";
import * as i32 from "ionic-angular/navigation/url-serializer";
import * as i33 from "ionic-angular/navigation/deep-linker";
import * as i34 from "ionic-angular/util/module-loader";
import * as i35 from "ionic-angular/components/modal/modal-controller";
import * as i36 from "ionic-angular/components/picker/picker-controller";
import * as i37 from "ionic-angular/components/popover/popover-controller";
import * as i38 from "ionic-angular/tap-click/tap-click";
import * as i39 from "ionic-angular/gestures/gesture-controller";
import * as i40 from "ionic-angular/components/toast/toast-controller";
import * as i41 from "ionic-angular/transitions/transition-controller";
import * as i42 from "@ionic-native/status-bar/index";
import * as i43 from "@ionic-native/splash-screen/index";
import * as i44 from "@ionic-native/in-app-browser/index";
import * as i45 from "ionic-angular/util/ionic-error-handler";
import * as i46 from "ionic-angular/platform/platform-registry";
import * as i47 from "ionic-angular/components/app/menu-controller";
import * as i48 from "ionic-angular/util/ng-module-loader";
import * as i49 from "ionic-angular/config/mode-registry";
import * as i50 from "./app.component";
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.IonicApp], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ActionSheetCmpNgFactory, i4.AlertCmpNgFactory, i5.IonicAppNgFactory, i6.LoadingCmpNgFactory, i7.ModalCmpNgFactory, i8.PickerCmpNgFactory, i9.PopoverCmpNgFactory, i10.SelectPopoverNgFactory, i11.ToastCmpNgFactory, i12.MyAppNgFactory, i13.RsspagePageNgFactory, i14.EntryPageNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i15.NgLocalization, i15.NgLocaleLocalization, [i0.LOCALE_ID, [2, i15.ɵa]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i16.DomSanitizer, i16.ɵe, [i15.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i16.DomSanitizer]), i0.ɵmpd(4608, i16.HAMMER_GESTURE_CONFIG, i17.IonicGestureConfig, []), i0.ɵmpd(5120, i16.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i16.ɵDomEventsPlugin(p0_0, p0_1), new i16.ɵKeyEventsPlugin(p1_0), new i16.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i15.DOCUMENT, i0.NgZone, i15.DOCUMENT, i15.DOCUMENT, i16.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i16.EventManager, i16.EventManager, [i16.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i16.ɵDomSharedStylesHost, i16.ɵDomSharedStylesHost, [i15.DOCUMENT]), i0.ɵmpd(4608, i16.ɵDomRendererFactory2, i16.ɵDomRendererFactory2, [i16.EventManager, i16.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i16.ɵDomRendererFactory2]), i0.ɵmpd(6144, i16.ɵSharedStylesHost, null, [i16.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i16.Meta, i16.Meta, [i15.DOCUMENT]), i0.ɵmpd(4608, i16.Title, i16.Title, [i15.DOCUMENT]), i0.ɵmpd(4608, i18.BrowserXhr, i18.BrowserXhr, []), i0.ɵmpd(4608, i18.ResponseOptions, i18.BaseResponseOptions, []), i0.ɵmpd(5120, i18.XSRFStrategy, i18.ɵa, []), i0.ɵmpd(4608, i18.XHRBackend, i18.XHRBackend, [i18.BrowserXhr, i18.ResponseOptions, i18.XSRFStrategy]), i0.ɵmpd(4608, i18.RequestOptions, i18.BaseRequestOptions, []), i0.ɵmpd(5120, i18.Http, i18.ɵb, [i18.XHRBackend, i18.RequestOptions]), i0.ɵmpd(4608, i19.ɵi, i19.ɵi, []), i0.ɵmpd(4608, i19.FormBuilder, i19.FormBuilder, []), i0.ɵmpd(4608, i20.ActionSheetController, i20.ActionSheetController, [i21.App, i22.Config]), i0.ɵmpd(4608, i23.AlertController, i23.AlertController, [i21.App, i22.Config]), i0.ɵmpd(4608, i24.Events, i24.Events, []), i0.ɵmpd(4608, i25.Form, i25.Form, []), i0.ɵmpd(4608, i26.Haptic, i26.Haptic, [i27.Platform]), i0.ɵmpd(4608, i28.Keyboard, i28.Keyboard, [i22.Config, i27.Platform, i0.NgZone, i29.DomController]), i0.ɵmpd(4608, i30.LoadingController, i30.LoadingController, [i21.App, i22.Config]), i0.ɵmpd(5120, i15.LocationStrategy, i31.provideLocationStrategy, [i15.PlatformLocation, [2, i15.APP_BASE_HREF], i22.Config]), i0.ɵmpd(4608, i15.Location, i15.Location, [i15.LocationStrategy]), i0.ɵmpd(5120, i32.UrlSerializer, i32.setupUrlSerializer, [i21.App, i32.DeepLinkConfigToken]), i0.ɵmpd(5120, i33.DeepLinker, i33.setupDeepLinker, [i21.App, i32.UrlSerializer, i15.Location, i34.ModuleLoader, i0.ComponentFactoryResolver]), i0.ɵmpd(4608, i35.ModalController, i35.ModalController, [i21.App, i22.Config, i33.DeepLinker]), i0.ɵmpd(4608, i36.PickerController, i36.PickerController, [i21.App, i22.Config]), i0.ɵmpd(4608, i37.PopoverController, i37.PopoverController, [i21.App, i22.Config, i33.DeepLinker]), i0.ɵmpd(4608, i38.TapClick, i38.TapClick, [i22.Config, i27.Platform, i29.DomController, i21.App, i39.GestureController]), i0.ɵmpd(4608, i40.ToastController, i40.ToastController, [i21.App, i22.Config]), i0.ɵmpd(4608, i41.TransitionController, i41.TransitionController, [i27.Platform, i22.Config]), i0.ɵmpd(4608, i42.StatusBar, i42.StatusBar, []), i0.ɵmpd(4608, i43.SplashScreen, i43.SplashScreen, []), i0.ɵmpd(4608, i44.InAppBrowser, i44.InAppBrowser, []), i0.ɵmpd(512, i15.CommonModule, i15.CommonModule, []), i0.ɵmpd(512, i0.ErrorHandler, i45.IonicErrorHandler, []), i0.ɵmpd(256, i22.ConfigToken, null, []), i0.ɵmpd(1024, i46.PlatformConfigToken, i46.providePlatformConfigs, []), i0.ɵmpd(1024, i27.Platform, i27.setupPlatform, [i16.DOCUMENT, i46.PlatformConfigToken, i0.NgZone]), i0.ɵmpd(1024, i22.Config, i22.setupConfig, [i22.ConfigToken, i27.Platform]), i0.ɵmpd(512, i29.DomController, i29.DomController, [i27.Platform]), i0.ɵmpd(512, i47.MenuController, i47.MenuController, []), i0.ɵmpd(512, i21.App, i21.App, [i22.Config, i27.Platform, [2, i47.MenuController]]), i0.ɵmpd(512, i39.GestureController, i39.GestureController, [i21.App]), i0.ɵmpd(256, i32.DeepLinkConfigToken, null, []), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i48.NgModuleLoader, i48.NgModuleLoader, [i0.Compiler]), i0.ɵmpd(1024, i34.ModuleLoader, i34.provideModuleLoader, [i48.NgModuleLoader, i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [i16.ɵh(p0_0), i49.registerModeConfigs(p1_0), i24.setupProvideEvents(p2_0, p2_1), i38.setupTapClick(p3_0, p3_1, p3_2, p3_3, p3_4), i34.setupPreloading(p4_0, p4_1, p4_2, p4_3)]; }, [[2, i0.NgProbeToken], i22.Config, i27.Platform, i29.DomController, i22.Config, i27.Platform, i29.DomController, i21.App, i39.GestureController, i22.Config, i32.DeepLinkConfigToken, i34.ModuleLoader, i0.NgZone]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i16.BrowserModule, i16.BrowserModule, [[3, i16.BrowserModule]]), i0.ɵmpd(512, i18.HttpModule, i18.HttpModule, []), i0.ɵmpd(512, i19.ɵba, i19.ɵba, []), i0.ɵmpd(512, i19.FormsModule, i19.FormsModule, []), i0.ɵmpd(512, i19.ReactiveFormsModule, i19.ReactiveFormsModule, []), i0.ɵmpd(512, i31.IonicModule, i31.IonicModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i2.AppRootToken, i50.MyApp, []), i0.ɵmpd(256, i15.APP_BASE_HREF, "/", [])]); });
export { AppModuleNgFactory as AppModuleNgFactory };
//# sourceMappingURL=app.module.ngfactory.js.map