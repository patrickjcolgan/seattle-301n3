(function(module) {

var Filters = {};

  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
  Filters.getStates = function() {
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
      Filters.setCity();
    // })
  };

  Filters.setCity = function () {
  var result;
  $('#state-select').on('change', function() {
    console.log("on change");
    $("#city-select").empty();
    $("#city-select").append('<option value="city">Select a City</option>');
    result = "'" + $(this).val() + "'";
    console.log(result);
    Filters.populateCity(result);
  })
}

  Filters.populateCity = function(ele) {
    webDB.execute('SELECT DISTINCT city FROM zips WHERE state = ' + ele + 'ORDER BY city ASC;', function(cities) {
      console.log('cities fired');
      var cityArr = [];
      cities.map(function(a) {
        cityArr.push(a.city);
      })
      cityArr.forEach(function(name) {
        $('#city-select').append('<option value="' + name + '">' + name + '</option>');
      })
    })
  }

module.Filters = Filters;
})(window);
