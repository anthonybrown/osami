var Output = Backbone.Model.extend({
  initialize: function () {
      var output = document.getElementById('output');
      output.innerHTML += 'I am initialized<br>';
      output.innerHTML += 'isn\'t that cool?';
    }
});

var message = new Output();
