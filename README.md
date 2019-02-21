# Tweeter Project

Tweeter is a single-page Twitter clone created as part of an exercise at LHL bootcamp to expand my abilities with front-end development. The app implements AJAX, jQuery, html, Javascript, and css to maintain a content feed that updates automatically with posts. Tweeter runs on a simple express server and uses MongoDB for persistent data storage.

Tweeter currently takes in posts and assigns them to a randomly generated user.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Chance
- Body-parser
- md5
- MongoDB

## Screenshots

!["Screenshot of Tweeter on initial load"](https://github.com/MattccTO/tweeter/blob/master/docs/Load-Page.png)

!["Screenshot of opened compose tweet box"](https://github.com/MattccTO/tweeter/blob/master/docs/Compose-Tweet.png)

!["Screenshot of tweet on hover"](https://github.com/MattccTO/tweeter/blob/master/docs/Tweet-Hover.png)

!["Screenshot of error message from data validation"](https://github.com/MattccTO/tweeter/blob/master/docs/Data-Validation.png)