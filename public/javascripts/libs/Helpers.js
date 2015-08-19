$(function() {

  Handlebars.registerHelper('format', function(str) {

    if (str) {
      return new Handlebars.SafeString(str.parseURL().parseUsername().parseHashtag());
    } else {
      return str;
    }

  });

});