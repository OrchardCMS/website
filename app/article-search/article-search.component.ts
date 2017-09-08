import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ArticleSearchService } from './article-search.service';
import { Article } from './models/article';

@Component({
    moduleId: module.id,
    selector: 'article-search',
    templateUrl: 'article-search.component.html',
    providers: [ ArticleSearchService ]
})
export class ArticleSearchComponent implements OnInit {

    articles = [];

    private searchTermStream = new Subject<string>();

    
    constructor(private articleSearchService: ArticleSearchService) 
    { 
        
    }

    ngOnInit(): void { 
        console.log('search'); 
        this.setup();
       this.articleSearchService.search('').map(a => a).subscribe(a => this.articles);
    }

    setup(): void {
                this.searchTermStream
                            .debounceTime(300)
                            .distinctUntilChanged()
                            .switchMap((term: string) => this.articleSearchService.search(term));
    }

    search(term?: string) {
        console.log(term);
        this.searchTermStream.next(term);

        
    }
}