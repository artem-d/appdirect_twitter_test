AppDirectApp.Views.SettingsView = Backbone.View.extend({

  el: '#settingsView',

  template: Handlebars.compile($("#settings-template").html()),

  events: {
    "submit #settingsForm": "submit"
  },

  initialize: function() {
    this.listenTo(EventBus, "settingsView:click", this.toggle);
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  toggle: function() {
    this.$el.toggle();
  },

  submit: function (e) {
    e.preventDefault();
    var formData = $('form#settingsForm').serializeArray();
    console.log(formData);
  }
});