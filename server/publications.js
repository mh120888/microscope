Meteor.publish('posts', function() {
	return Posts.find();
});

Meteor.publish('allPosts', function() {
	return Posts.find({}, {fields: {
		date: false
	}});
});

Meteor.publish('comments', function(postId) {
	check(postId, String);
	return Comments.find({postId: postId});
});