"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var article_search_service_1 = require('./article-search.service');
var ArticleSearchComponent = (function () {
    function ArticleSearchComponent(articleSearchService) {
        this.articleSearchService = articleSearchService;
        this.articles = [];
        this.searchTermStream = new Subject_1.Subject();
    }
    ArticleSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('search');
        this.setup();
        this.articleSearchService.search('').map(function (a) { return a; }).subscribe(function (a) { return _this.articles; });
    };
    ArticleSearchComponent.prototype.setup = function () {
        var _this = this;
        this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.articleSearchService.search(term); });
    };
    ArticleSearchComponent.prototype.search = function (term) {
        console.log(term);
        this.searchTermStream.next(term);
    };
    ArticleSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'article-search',
            templateUrl: 'article-search.component.html',
            providers: [article_search_service_1.ArticleSearchService]
        }), 
        __metadata('design:paramtypes', [article_search_service_1.ArticleSearchService])
    ], ArticleSearchComponent);
    return ArticleSearchComponent;
}());
exports.ArticleSearchComponent = ArticleSearchComponent;
//# sourceMappingURL=article-search.component.js.map