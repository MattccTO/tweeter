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
  const $postTweet = $('#postTweet');
  const $tweetText = $('textarea');

  $postTweet.submit(function (ev) {
    ev.preventDefault();
    if ($tweetText.val() === '' || $tweetText.val() === null) {
      alert('Blank tweets are not accepted');
    } else if ($tweetText.val().length > 140) {
      alert('Too many characters! Please refactor to 140 or less.');
    } else {
      $.post('/tweets', $postTweet.serialize());
      $tweetText.val('');
    }
  });

  function loadTweets() {
    $.get('/tweets', function (tweetData) {
      renderTweets(tweetData);
    });
  }

  loadTweets();
});
