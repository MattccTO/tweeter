/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  function getTweetElement(rawTweet) {
    let tweet = `<article class="tweet">
          <header>
            <img class="avatar" src='${rawTweet.user.avatars.regular}'/>
            <h2>${rawTweet.user.name}</h2>
            <span class="handle">${rawTweet.user.handle}</span>
          </header>
          <p>${rawTweet.content.text}</p>
          <footer>
            ${rawTweet.created_at}
            <div class="icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </article>`;
    return tweet;
  }

  function renderTweets(tweetArray) {
    tweetArray.forEach((singleTweet) => {
      const tweet = getTweetElement(singleTweet);
      $('#tweetainer').append(tweet);
    });
  }


  // const $submitTweet = $('#submitTweet');
  const $newTweet = $('#newTweet');

  $newTweet.submit(function (ev) {
    ev.preventDefault();
    // console.log($newTweet);
    // console.log(ev);
    $.post('/tweets', $newTweet.serialize());
  });

  function loadTweets() {
    $.get('/tweets', function (tweetData) {
      renderTweets(tweetData);
    });
  }

  loadTweets();
});
