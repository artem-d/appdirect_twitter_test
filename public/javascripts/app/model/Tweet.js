AppDirectApp.Models.Tweet = Backbone.Model.extend({

  parse: function(model) {

    var created = model.created_at;
    var momentCreated = moment(model.created_at, "ddd MMM DD HH:mm:ss ZZ YYYY");
    var isCurrentDate = momentCreated.isSame(new Date(), "day");
    if (isCurrentDate) {
      var friendly = momentCreated.calendar();
    } else {
      var friendly = new Date(created).toLocaleString();
    }

    model.friendlyDate = friendly;

    return model;
  }

});