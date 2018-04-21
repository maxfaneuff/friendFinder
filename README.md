# friendFinder

A repo for the express hw

## Display

On load, the user ends up at the home page, which is very simple & has only one button, save for the API and Github links. That button takes you to the survey page.

The survey page has, among other things, a name & picture link field, ten questions and a submit button. The user fills in their name, picture link, and gives a 1-5 answer for all 10 questions. Once the user fills in the info & clicks submit, a pop-up window displays that user's new BFF, along w/ a picture of that new BFF.

## Functionality

I used two main API's/Routes for this project: a .get route & a .post route. The .get route either takes you to the survey page on "/survey", or to the home page when any other URL is entered.

[html](https://github.com/maxfaneuff/friendFinder/blob/master/images/html.png?raw=true)

My .get API simply returns a JSON object of all the friends saved in friends.js already.

[apiget](https://github.com/maxfaneuff/friendFinder/blob/master/images/api%20get.png?raw=true)

My .post function is where the majority of the functionality takes place. I store the user-generated data to a variable, store all the scores of the already-saved people to a variable, and then loop through each of those scores individually, comparing it to the user's scores using Math.abs. The sum of all those comparison Math.abs's is stored to a variable called "newDiff". After each previously-stored person's scores are compared to the user's scores, if newDiff is lower than the previous iteration of newDiff (stored in scoreDiff), a new newDiff is stored. The lowest score difference remains newDiff, and that person's data is selected & sent as the response.

[apipost](https://github.com/maxfaneuff/friendFinder/blob/master/images/api%20post.png?raw=true)

My front-end $.post takes that response and appends the appropriate Modal information, before showing the Modal. When the close button is clicked on the Modal, the page is refreshed, and the user is ready to repeat the process.

[onclick](https://github.com/maxfaneuff/friendFinder/blob/master/images/onclick.png?raw=true)
