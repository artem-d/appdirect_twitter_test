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
    this.$el.html(this.template({
      tweetCount: this.model.tweetCount,
      twitterAccounts: this.model.twitterAccounts
    }));
    return this;
  },

  toggle: function() {
    this.$el.toggle();
  },

  submit: function(e) {
    e.preventDefault();
    var formData = this.parseForm('settingsForm');
    AppDirectApp.settings.updateAttributes(formData);
  },

  parseForm: function(formId) {
    $form = $('form#' + formId);
    var tweetCount = $form.find('input[name="tweetCount"]').val();
    var twitterAccounts =
      _.map($form.find("ul#sortable li"), function(li) {
        return $(li).data("twitter-acc");
      });
    return {
      tweetCount: tweetCount,
      twitterAccounts: twitterAccounts
    };
  }
});