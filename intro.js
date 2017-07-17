var declarativeRendering = new Vue({
  el: '#declarative-rendering',
  data: {
    message: 'Hello Vue!'
  }
});

var elementBinding = new Vue({
  el: '#element-binding',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});

var conditionals = new Vue({
  el: '#conditionals',
  data: {
    isTrue: true,
  }
});

var loops = new Vue({
  el: '#loops',
  data: {
    todos: [
      { text: 'This is a list' },
      { text: 'that I iterated over with' },
      { text: 'the directive `v-for`.' }
    ]
  }
});

var userInputButton = new Vue({
  el: '#userInputButton',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var twoWayBinding = new Vue({
  el: '#twoWayBinding',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('static-component', {
  template: '<b>This is a static custom component.</b>'
});

Vue.component('dynamic-component', {
  props: ['item'],
  template: '<li>{{ item.text }}</li>'
});

var components = new Vue({
  el: '#components',
  data: {
    groceryList: [
      { id: 0, text: 'Milk' },
      { id: 1, text: 'Eggs' },
      { id: 2, text: 'Cheese' }
    ]
  }
});
