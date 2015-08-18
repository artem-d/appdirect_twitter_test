AppDirectApp.Models.Tweet = Backbone.Model.extend({

  parse: function(model){

    //mode.created_at "Wed Aug 28 06:32:07 +0000 2013"
    var created = model.created_at;
    var momentCreated = moment(model.created_at, "ddd MMM DD HH:mm:ss ZZ YYYY");
    var iscurrentDate = momentCreated.isSame(new Date(), "day");
    if(iscurrentDate) {
      var friendly = momentCreated.calendar();
    } else {
      var friendly = new Date(created).toLocaleString();
    }

    model.friendlyDate = friendly;

    return model;
  }

});
