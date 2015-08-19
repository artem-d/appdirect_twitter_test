AppDirectApp.Models.Settings = Backbone.Model.extend({

  initialize: function() {
    //Try to get setting from the LocalStore if they exist otherwise set the default values.
    var localStoreSetttings = localStorage.getItem('AppDirectSettings');
    if (localStoreSetttings) {
      var parsedSettings = JSON.parse(localStoreSetttings);
      this.twitterAccounts = parsedSettings.twitterAccounts;
      this.tweetCount = parsedSettings.tweetCount;
    } else {
      this.twitterAccounts = ['AppDirect', 'TechCrunch', 'LaughingSquid'];
      this.tweetCount = 30;
    }
  },

  updateAttributes: function(attributes) {
    this.tweetCount = parseInt(attributes.tweetCount);
    this.twitterAccounts = attributes.twitterAccounts;

    //Update AppDirectSettings in LocalStore
    var AppDirectSettings = {
      twitterAccounts: this.twitterAccounts,
      tweetCount: this.tweetCount
    };
    localStorage.setItem('AppDirectSettings', JSON.stringify(AppDirectSettings));

    //Trigger settings update event
    EventBus.trigger('settingsModel:update');
  }

});