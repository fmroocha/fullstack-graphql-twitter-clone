const { gql } = require("apollo-server-express");

const postType = gql`
	type Post {
		id: ID!
		content: String!
		author: User
	}
`;

module.exports = postType;
