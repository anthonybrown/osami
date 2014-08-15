var Output = Backbone.Model.extend({
  initialize: function () {
      var output = document.getElementById('output');
      output.innerHTML += 'I am initialized<br>';
      output.innerHTML += 'is\'nt that cool';
    }
});

var message = new Output();
