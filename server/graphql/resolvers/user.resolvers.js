const User = require("../../models/user.model");
const Post = require("../../models/post.model");

const userResolvers = {
	Query: {
		user: async (_parent, { id }) => await User.findById(id),
		users: async () => await User.find({}),
	},

	User: {
		posts: async (parent) => await Post.find({ authorId: parent.id }),
	},

	Mutation: {
		signUp: async (_parent, { name, email, password }) => {
			const existingUser = await User.findOne({ email });

			if (existingUser) {
				throw new Error("This email is already in use.");
			}

			if (password.length < 7) {
				throw new Error("The password must contain at least 7 characters.");
			}

			const user = new User({ name, email, password });
			user.save();

			return user;
		},
	},
};

module.exports = userResolvers;
