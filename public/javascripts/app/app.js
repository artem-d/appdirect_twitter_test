window.AppDirectApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    var twitterAccounts = ["AppDirect", "TechCrunch", "LaughingSquid"];
    this.initTimeLineViews(twitterAccounts);
    new AppDirectApp.Views.SettingsToggleView();
    new AppDirectApp.Views.SettingsView();
    new AppDirectApp.Routers.AppRouter();

    Backbone.history || (Backbone.history = new Backbone.History);
    return Backbone.history.start({
      pushState: true
    });
  },
  initTimeLineViews: function (twitterAccounts) {
    twitterAccounts.forEach(function (el, i) {
      new AppDirectApp.Views.TimelineView({el: ".tweetColumn#column_"+i, twitterAccount: el});
    });
  }
};

var EventBus = _.extend({},Backbone.Events);

$(document).ready(function() {
  AppDirectApp.initialize();
});