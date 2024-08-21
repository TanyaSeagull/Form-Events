const tweetForm = document.querySelector('#form');

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.querySelector('#username');
    const tweet = document.querySelector('tweet');
    const list = document.querySelector('#tweets');
    const newTweet = document.createElement('li');
    newTweet.innerHTML = `${tweetForm.username.value} - ${tweetForm.tweet.value}`;
    list.append(newTweet);
    tweetForm.reset();
});