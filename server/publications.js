Meteor.publish('posts', function() {
    return Posts.find();
});

Meteor.publish('allPosts', function() {
    return Posts.find({}, {fields: {
        date: false
    }});
});