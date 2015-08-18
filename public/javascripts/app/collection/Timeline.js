AppDirectApp.Collections.Timeline = Backbone.Collection.extend({

    model: AppDirectApp.Models.Tweet,
    url: '/timeline',

    initialize: function(options){
        //anything to be defined on construction goes here
    }

});
