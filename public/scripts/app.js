//  All functions that deal with composing, posting, and rendering tweets

//  Create string in html format for appending tweets
function getTweetElement(rawTweet) {
  const timeStamp = timeStamper(rawTweet.created_at);
  const tweet = `<article class="tweet">
    <header>
      <img class="avatar" src='${escape(rawTweet.user.avatars.regular)}'/>
      <h2>${rawTweet.user.name}</h2>
      <span class="handle">${escape(rawTweet.user.handle)}</span>
    </header>
    <p>${escape(rawTweet.content.text)}</p>
    <footer>
      ${timeStamp}
      <div class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
    </article>`;
  return tweet;
}

//  Functions that work with the DOM
$(document).ready(() => {
  //  Declare used jQuery selectors
  const $postTweet = $('#postTweet');
  const $tweetText = $('textarea');
  const $counter = $('.counter');

  //  Add composed tweets html string to DOM
  function renderTweets(tweetArray) {
    $('#tweetainer').empty();
    tweetArray.forEach((singleTweet) => {
      const tweet = getTweetElement(singleTweet);
      $('#tweetainer').prepend(tweet);
    });
  }

  //  Function for posting new tweet and validating data for errors
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
      $counter.html(140);
    }
  });

  // Load all tweets to page
  function loadTweets() {
    $.get('/tweets', function (tweetData) {
      renderTweets(tweetData);
    });
  }

  loadTweets();
});
