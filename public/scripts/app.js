/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  function escape(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function getTweetElement(rawTweet) {
    const date = new Date;
    const tweet = `<article class="tweet">
      <header>
        <img class="avatar" src='${escape(rawTweet.user.avatars.regular)}'/>
        <h2>${rawTweet.user.name}</h2>
        <span class="handle">${escape(rawTweet.user.handle)}</span>
      </header>
      <p>${escape(rawTweet.content.text)}</p>
      <footer>
        ${date.toDateString(rawTweet.created_at)}
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
    $('#tweetainer').empty();
    tweetArray.forEach((singleTweet) => {
      const tweet = getTweetElement(singleTweet);
      $('#tweetainer').prepend(tweet);
    });
  }

  const $postTweet = $('#postTweet');
  const $tweetText = $('textarea');

  $postTweet.submit(function (ev) {
    ev.preventDefault();
    $('.errorMsg').slideUp(50);
    if ($tweetText.val() === '' || $tweetText.val() === null) {
      $('.errorMsg').html('Blank tweets are not accepted!');
      $('.errorMsg').slideDown(400);
      // alert('Blank tweets are not accepted');
    } else if ($tweetText.val().length > 140) {
      $('.errorMsg').html('Too many characters!');
      $('.errorMsg').slideDown(400);
      // alert('Too many characters! Please refactor to 140 or less.');
    } else {
      $.post('/tweets', $postTweet.serialize())
        .done(loadTweets);
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
