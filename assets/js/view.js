var TodoView = Backbone.View.extend({
  tagName: 'li',

  todoTpl: _.template('An example template'),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  initialize: function (options) {
    this.options = options || {};
  },

  render: function () {
    this.$el.html( this.todoTpl ( this.model.attributes ) );
    this.input = this.$('.edit');
    return this;
  },

  edit: function () {
    console.log('edit function fired');
  },

  close: function () {
    console.log('close function fired');
  },
  
  updateOnEnter: function (e) {
    console.log('updateOnEnter function fired');
  }
});

var todoView = new TodoView();

console.log(todoView.el);

var btn1 = $('<button></button>');
var btn2 = $('<button></button>');

var View = Backbone.View.extend({
  events: {
    click: function (e) {
      console.log(view.el === e.target);
    }
  }
});

var view = new View({el: btn1});

view.setElement(btn2);

btn1.trigger('click');
btn2.trigger('click');

var testView = new Backbone.View();
view.setElement('<p><a><b>test</b></a></p>');
console.log(testView.$('a b').html());

var ListView = Backbone.View.extend({
  // Compile a template for this view.
  // ... is a placeholder for a template such as
  // $('#list_template').html()
  template: _.template('...'),

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
