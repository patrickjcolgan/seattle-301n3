(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    // REVIEW: Look at this method chaning. What is being accomplished here?
    $('#about').show().siblings().hide();

    // DONE TODO: Call a function to 'request' our repo data.
    // Pass in a view function as a callback, so our repos will render after the data is loaded.
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
