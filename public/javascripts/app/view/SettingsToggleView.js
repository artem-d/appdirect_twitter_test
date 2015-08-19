AppDirectApp.Views.SettingsToggleView = Backbone.View.extend({

  el: '#settingsToggle',

  events: {
    "click #toggleSettings": "click"
  },

  initialize: function() {
    this.render();
  },

  click: function () {
    EventBus.trigger('settingsView:click');
  },

  render: function () {
    this.$el.html('<a href="#" id="toggleSettings">Settings</a>');
    return this;
  }

});