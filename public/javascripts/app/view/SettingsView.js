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
    this.$el.html(this.template({count: this.model.tweetCount}));
    return this;
  },

  toggle: function() {
    this.$el.toggle();
  },

  submit: function (e) {
    e.preventDefault();
    var $form = $('form#settingsForm');
    var tweetCount = $form.find('input[name="tweetCount"]').val();
    AppDirectApp.settings.updateAttributes({tweetCount: tweetCount});
  }
});