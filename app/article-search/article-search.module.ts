import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ArticleSearchComponent } from './article-search.component';

@NgModule({
    imports: [BrowserModule],
    exports: [ArticleSearchComponent],
    declarations: [ArticleSearchComponent],
    providers: [],
    bootstrap: [ArticleSearchComponent]
})
export class ArticleSearchModule { }
