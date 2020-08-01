const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true,
	},
	authorId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
