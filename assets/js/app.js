var Output = Backbone.Model.extend({
  tagName: 'li',

  initialize: function () {
      var output = document.getElementById('output');
      output.innerHTML += 'I am initialized<br>';
      output.innerHTML += 'isn\'t that cool?';
    }
});

var message = new Output();

var Todo = Backbone.Model.extend({
  tagName: 'li',

  defaults: {
    title: '',
    completed: false
  }
});

var todo2 = new Todo({
  title: 'Retrived with the model\'s get() method.',
  completed: true
});

var todo1 = new Todo();
var todoAttrs = todo2.toJSON();
var output = document.getElementById('output');
output.innerHTML += todo1.get('title')+'<br>';
output.innerHTML += todo1.get('completed')+'<br>';
output.innerHTML += todo2.get('title')+'<br>';
output.innerHTML += todo2.get('completed')+'<br>';
console.log(todoAttrs);
console.log(todo1.toJSON());

var myTodo = new Todo({
  title: 'Set through instantiation'
});

output.innerHTML += '<br>Todo title: '+ myTodo.get('title');
output.innerHTML += '<br>Completed: '+ myTodo.get('completed')+'<br />';

myTodo.set({
  title: 'Title attribute set through Model.set().',
  completed: true
});

output.innerHTML += '<br />Todo Title: '+ myTodo.get('title');
output.innerHTML += '<br />Completed: '+ myTodo.get('completed')+'<br>';

var Person = new Backbone.Model();
Person.on('change:name', function () {
  var output = document.getElementById('output');
  output.innerHTML += '<br />Name changed, because we were listening for a change on the model.<br>';
  console.log('\nName changed');
});

Person.set({name: 'Tony Brown'});
console.log(Person.hasChanged('name'));

Person.set({name: 'Bill'}, {silent: true});
console.log(Person.hasChanged(null));

var Listen = Backbone.Model.extend({
  tagName: 'li',

  defaults: {
    title: '',
    listening: true
  },

  initialize: function () {
    console.log('This model has been initialized.');
    this.on('change', function () {
      console.log('- values for this model have been changed');
    });
  }
});

var myListener = new Listen();
