var Twitter = function() {
    this.tweets = {};
    this.followers = {};
    this.time = 0;
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (this.tweets[userId]) {
        this.tweets[userId].push({ time: ++this.time, id: tweetId });
    } else {
        this.tweets[userId] = [{ time: ++this.time, id: tweetId }];
    }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    // getting all users with tweets, where value is last index of tweets array
    var users = {};
    if (this.tweets[userId]) {
        users[userId] = this.tweets[userId].length - 1;
    }
    if (this.followers[userId]) {
        for (var key in this.followers[userId]) {
            if (this.tweets[key]) {
                users[key] = this.tweets[key].length - 1;
            }
        }
    }
    
    var maxTime;
    var maxUser;
    var news = [];
    for (var i = 0; i < 10; i++) { // max 10 news to return
        maxTime = 0;
        for (var userKey in users) { // finding tweet with max time
            if (this.tweets[userKey][users[userKey]].time > maxTime) {
                maxUser = userKey;
                maxTime = this.tweets[userKey][users[userKey]].time;
            }
        }
        
        // if found, getting tweet and updating last index array for that user (or removing user, if we can't move anymore)
        if (maxTime) {
            news.push(this.tweets[maxUser][users[maxUser]].id);
            if (users[maxUser]) {
                users[maxUser]--;
            } else {
                delete users[maxUser];
            }
        }
    }
    
    return news;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.followers[followerId]) {
        this.followers[followerId] = Object.create(null);
    }
    this.followers[followerId][followeeId] = true;
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.followers[followerId]) {
        delete this.followers[followerId][followeeId];
    }
};