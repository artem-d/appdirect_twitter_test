AppDirectApp.Collections.Timeline = Backbone.Collection.extend({

    model: AppDirectApp.Models.Tweet,
    url: '/timeline',

    initialize: function(options){

    }

});
