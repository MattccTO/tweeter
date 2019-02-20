/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  const tweetData = [{
    user: {
      name: 'Newton',
      avatars: {
        small: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
        regular: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
        large: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png'
      },
      handle: '@SirIsaac'
    },
    content: {
      text: 'If I have seen further it is by standing on the shoulders of giants'
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: 'Descartes',
      avatars: {
        small: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png',
        regular: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png',
        large: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png'
      },
      handle: '@rd'
    },
    content: {
      text: 'Je pense , donc je suis'
    },
    created_at: 1461113959088
  },
  {
    user: {
      name: 'Johann von Goethe',
      avatars: {
        small: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png',
        regular: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png',
        large: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png'
      },
      handle: '@johann49'
    },
    content: {
      text: 'Es ist nichts schrecklicher als eine tätige Unwissenheit.'
    },
    created_at: 1461113796368
  }];

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

  renderTweets(tweetData);
});
