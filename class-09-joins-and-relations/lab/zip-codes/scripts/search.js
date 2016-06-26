(function(module) {

var Filters = {};

  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
  Filters.getStates = function(){
    // if(zips) {
      webDB.execute('SELECT DISTINCT state from zips ORDER BY state ASC', function(rows) {
        var statesArr = [];
        rows.map(function(a){
          statesArr.push(a.state);
        })
        statesArr.forEach(function(ele) {
          var optionTag = '<option value="' + ele + '">' + ele + '</option>';
          $('#state-select').append(optionTag);
        })
      })
    // })
  }
module.Filters = Filters;
})(window);
