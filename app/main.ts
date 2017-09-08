import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';
//import { platformBrowser } from '@angular/platform-browser';
//import { MyAppModuleNgFactory } from './app.module.ngfactory'


enableProdMode();
//platformBrowser().bootstrapModuleFactory(MyAppModuleNgFactory);
platformBrowserDynamic().bootstrapModule(AppModule);