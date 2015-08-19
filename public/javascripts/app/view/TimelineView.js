AppDirectApp.Views.TimelineView = Backbone.View.extend({

  template: Handlebars.compile($("#timeline-template").html()),

  timeline: null,

  initialize:  function(options){
    var self = this;
    self.twitterAccount = options.twitterAccount;
    //create a collection for this view to render
    self.timeline = new AppDirectApp.Collections.Timeline();
    //initial render
    self.render();

    //force the fetch to fire a reset event
    var tweetCount = AppDirectApp.settings.tweetCount;
    self.timeline.fetch({data: {twitterAccount: self.twitterAccount, tweetCount: tweetCount}, reset: true});

    self.listenTo(self.timeline, 'reset', self.render);

    self.listenTo(EventBus, "settingsModel:update", this.updateCollection);
  },

  render: function(){
    var self = this;
    console.log(self.timeline.models);
    if(self.timeline.models.length > 0){
      var output = self.template({tweets: self.timeline.toJSON()});

      self.$el.html(output);
    }
    return self;
  },

  updateCollection: function () {
    var tweetCount = AppDirectApp.settings.tweetCount;
    this.timeline.fetch({data: {twitterAccount: this.twitterAccount, tweetCount: tweetCount}, reset: true});
  }

});