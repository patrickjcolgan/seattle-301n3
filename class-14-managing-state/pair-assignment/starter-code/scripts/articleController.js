(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // ANSWER: We have a loadById method on the articlesController object.
  //This function takes two parameters. We must have ctx as the first param.
  //then 'next' will be called, which invokes articlesController.index
  //on the '/article/:id' page.
  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) { //articleData variable declared. Equals a function w/article param
      ctx.articles = article;//reassign articles to the ctx object. This equals article.
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);//Article.findWhere queries data from webdb by looking for the unique id key.
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // ANSWER: We have the loadByAuthor method on the articlesController object.
  // function takes two parameters. The next() callback will invoke articlesController.index.
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;//reassign articles to ctx object. This equals articlesByAuthor
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);//Article.findWhere queries webdb, and changes any plus sign to an empty space/string
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // ANSWER: We have the loadByCategory method on the articlesController object.
  // As before, two params, next() invokes articlesController.index.
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);//queries webdb by category
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // ANSWER: We have the loadAll method on articlesController object.
  // Once again, two params. Second parameter, next() will invoke articlesController.index.
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;//reassign articles to ctx object. This equals the Article.all array in article.js file
      next();
    };

    if (Article.all.length) { //checks to see if there is anything stored locally in Article.all array.
      ctx.articles = Article.all;//if truthy, make what's in Article.all equal to ctx.articles and call next()
      next();
    } else {//if there's nothing in the database, fetch all of the articles by calling Article.fetchAll with articleData as the argument...which is also a function.
      Article.fetchAll(articleData);
    }
  };


  module.articlesController = articlesController;
})(window);
