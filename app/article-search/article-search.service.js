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
var http_1 = require('@angular/http');
var ArticleSearchService = (function () {
    function ArticleSearchService(http) {
        this.http = http;
    }
    ArticleSearchService.prototype.search = function (term) {
        console.log('searched:' + term);
        return this.http.get("https://api.myjson.com/bins/4iaco?name=" + term).map(function (r) { return r.json(); });
    };
    ArticleSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleSearchService);
    return ArticleSearchService;
}());
exports.ArticleSearchService = ArticleSearchService;
//# sourceMappingURL=article-search.service.js.map