window.AppDirectApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    AppDirectApp.settings = new AppDirectApp.Models.Settings();
    this.initTimelineViews(AppDirectApp.settings);
    new AppDirectApp.Views.SettingsToggleView();
    new AppDirectApp.Views.SettingsView({model: AppDirectApp.settings});
    new AppDirectApp.Routers.AppRouter();

    Backbone.history || (Backbone.history = new Backbone.History);
    return Backbone.history.start({
      pushState: true
    });
  },

  initTimelineViews: function (settings) {
    settings.twitterAccounts.forEach(function (el, i) {
      var collection = new AppDirectApp.Collections.Timeline();

      new AppDirectApp.Views.TimelineView({ el: ".tweetColumn#column_"+el.order, twitterAccount: el.name });
    });
  },

  initSettings: function () {
    AppDirectApp.settings = new AppDirectApp.Models.Settings();
  }
};

var EventBus = _.extend({},Backbone.Events);

$(document).ready(function() {
  AppDirectApp.initialize();
});