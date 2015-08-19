AppDirectApp.Views.TimelineView = Backbone.View.extend({

  template: Handlebars.compile($("#timeline-template").html()),

  timeline: null,

  initialize:  function(options){
    var self = this;

    //create a collection for this view to render
    self.timeline = new AppDirectApp.Collections.Timeline();
    //initial render
    self.render();

    //force the fetch to fire a reset event
    self.timeline.fetch({data: {twitterAccount: options.twitterAccount}, reset:true});

    self.listenTo(self.timeline, 'reset', self.render);

  },

  render: function(){
    var self = this;
    console.log(self.timeline.models);
    if(self.timeline.models.length > 0){
      var output = self.template({tweets: self.timeline.toJSON()});

      self.$el.html(output);
    }
    return self;
  }

});