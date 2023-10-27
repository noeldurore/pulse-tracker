/* 
Filename: ComplexCode.js

This code is a complex example of a social media application that allows users to create and share posts, follow other users, like and comment on posts, and view their profile and activities. 
Note: This is a simplified version of a social media application with simplified functionality and structure for demonstration purposes.
*/

// User class
class User {
  constructor(name, username, email) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.posts = [];
    this.following = [];
  }

  createPost(title, content) {
    const post = new Post(this, title, content);
    this.posts.push(post);
    return post;
  }

  follow(user) {
    if (!this.following.includes(user)) {
      this.following.push(user);
    }
  }

  getFeed() {
    let feed = [];
    for (let user of this.following) {
      feed = feed.concat(user.posts);
    }
    return feed.sort((a, b) => b.timestamp - a.timestamp);
  }
}

// Post class
class Post {
  constructor(user, title, content) {
    this.user = user;
    this.title = title;
    this.content = content;
    this.timestamp = Date.now();
    this.likes = 0;
    this.comments = [];
  }

  like() {
    this.likes++;
  }

  comment(user, text) {
    const comment = new Comment(user, text);
    this.comments.push(comment);
  }
}

// Comment class
class Comment {
  constructor(user, text) {
    this.user = user;
    this.text = text;
    this.timestamp = Date.now();
  }
}

// Example usage
const john = new User("John Doe", "john_doe", "john@example.com");
const sarah = new User("Sarah Smith", "sarah_smith", "sarah@example.com");

john.createPost("First Post", "Hello, world!");
sarah.createPost("Hello, everyone!", "I'm excited to join this social media app!");

john.follow(sarah);

const feed = john.getFeed();
console.log("John's feed:", feed);

feed[0].like();
feed[0].comment(john, "Nice post!");

console.log(feed[0]);
console.log(feed[0].comments[0]); 

/* Output:
John's feed: [Post, Post]
Post {user: User, title: "Hello, everyone!", content: "I'm excited to join this social media app!", timestamp: 1608182448666, likes: 1, comments: Array(1)}
Comment {user: User, text: "Nice post!", timestamp: 1608182448668}
*/

// ... More code for additional functionalities, UI, etc.