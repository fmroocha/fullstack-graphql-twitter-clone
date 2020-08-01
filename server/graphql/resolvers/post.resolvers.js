const Post = require("../../models/post.model");
const User = require("../../models/user.model");

const postResolvers = {
	Query: {
		post: async (_parent, { id }) => await Post.findById(id),
		posts: async (_parent, { authorId }) => await Post.find({ authorId }),
	},

	Post: {
		author: async ({ authorId }) => await User.findById(authorId),
	},

	Mutation: {
		newPost: async (_parent, { content, authorId }) => {
			const post = new Post({ content, authorId });
			post.save();

			return post;
		},
	},
};

module.exports = postResolvers;
