AppDirectApp.Views.TimelineView = Backbone.View.extend({

  template: Handlebars.compile($("#timeline-template").html()),

  timeline: null,

  initialize: function(options) {
    var self = this;
    self.twitterAccount = options.twitterAccount;
    self.columnNum = options.columnNum;
    //create a collection for this view to render
    self.timeline = new AppDirectApp.Collections.Timeline();
    //initial render
    self.render();

    //force the fetch to fire a reset event
    var tweetCount = AppDirectApp.settings.tweetCount;
    self.timeline.fetch({
      data: {
        twitterAccount: self.twitterAccount,
        tweetCount: tweetCount
      },
      reset: true
    });

    self.listenTo(self.timeline, 'request', function() {
      self.$el.html('<div id ="center" style="position:relative;top:20%;left:45%"><img class="spinner" src="images/spinner.gif" height="40px" width="40px"></div>');
    }, this);

    self.listenTo(self.timeline, 'reset', self.render);

    self.listenTo(EventBus, "settingsModel:update", this.updateCollection);
  },

  render: function() {
    var self = this;
    console.log(self.timeline.models);
    if (self.timeline.models.length > 0) {
      var output = self.template({
        tweets: self.timeline.toJSON()
      });

      self.$el.html(output);
    }
    return self;
  },

  updateCollection: function() {
    var tweetCount = AppDirectApp.settings.tweetCount;
    var twitterAccount = AppDirectApp.settings.twitterAccounts[this.columnNum];
    this.timeline.fetch({
      data: {
        twitterAccount: twitterAccount,
        tweetCount: tweetCount
      },
      reset: true
    });
  }

});