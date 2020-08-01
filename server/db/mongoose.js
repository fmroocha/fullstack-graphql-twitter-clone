const mongoose = require("mongoose");

mongoose.connect(
	`mongodb+srv://fmrocha:${process.env.DB_PASSWORD}@twitter-clone-custer.timjj.gcp.mongodb.net/<twitter-clone-db>?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);
