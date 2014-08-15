var Todo = Backbone.Model.extend({
  initialize: function () {
      var output = document.getElementById('output');
      output.innerHTML += 'I am initialized<br>';
      output.innerHTML += 'is\'nt that cool';
    }
});

var myTodo = new Todo();
