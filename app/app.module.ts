import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ArticleSearchModule } from './article-search/article-search.module';

import { AppComponent }   from './app.component';
import { ArticleSearchComponent }   from './article-search/article-search.component';

@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule, HttpModule, ArticleSearchModule],
    providers:    [],
    bootstrap:    [AppComponent, ArticleSearchComponent]
})
export class AppModule {}
