var ReversibleComponent = Vue.extend({
  data: function() {
    return { message: 'Default value in ReversibleComponent.message' };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  },
  template: '<div><span>{{ message }}</span> <button v-on:click="reverseMessage">Reverse Message</button></div>'
});

var myReversibleComponentInstance = new ReversibleComponent({
  el: '#reversible-component',
});

var myReversibleComponentInstanceWithOverride = new ReversibleComponent({
  el: '#reversible-component-override',
  data: {
    message: 'ReversibleComponent instance with message override'
  }
});
