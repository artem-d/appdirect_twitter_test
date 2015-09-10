# Twitter Challenge:

The server side is implemented with Node.js + Express.js, front-end is a Backbone.js app.

## The challenge:

We are interested in making a front-end with standards-compliant, asynchronous, API-driven, beauteous JavaScript, HTML, and CSS. Your task is to do just that with Twitter's REST API. Please complete any number of the steps below within 10 days of us sending you this document. You may put in as many hours as you wish and use any framework and languages you would like (evidence of native JavaScript + Backbone use encouraged) to complete the task. We will accept an email attachment of files, a link to a github repo, or a url of a website where your solution is posted. We are looking for code quality, knowledge of cross-browser compatibility, quick load times, and innovation/thoughtfulness.

## Part I: Get it

Use the Twitter API to create three columns containing the last 30 tweets from @AppDirect, @laughingsquid, and @techcrunch. Each tweet should include at minimum:

 - The tweet content.
 - A well-formatted created_at date.
 - A link to the tweet.
 - For retweets and mentions, the username should be included.
 - Please note that Twitter's REST API does not accept cross-domain requests. Feel free to use a simple proxy server.

**Bonuses/for fun:**

 - Make the columns flexible for screen width so the columns fill 100% of the page width. Layout could be as small as 320px wide. Column arrangement is open-ended.

## Part II: Meta

1. Make an "edit layout" view that has a form to change the layout settings.
2. Use HTML5 LocalStorage to store and load the layout settings.
3. Configurable settings could possibly include:

	a. The order of the columns.  
	b. The time range of the tweets shown.  
	c. The number of tweets shown in each column.  
	d. The overall palette/skin of the page.

4. The "edit layout" panel can appear either on the same page as the tweets page, on its own page, or embedded within the tweets layout - whichever you would like. There should be a straightforward way to toggle between edit and view modes, and it should be clear to the user which mode they are currently in.

**Bonuses/for fun:**

 - Use an interaction (like drag and drop) instead of a form field to order the columns.
