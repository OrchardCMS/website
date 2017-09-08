"use strict";
var Article = (function () {
    function Article(obj) {
        this.title = (obj && obj.id) || null;
        this.description = (obj && obj.id) || null;
        this.link = (obj && obj.id) || null;
        this.pubdate = (obj && obj.id) || null;
    }
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map