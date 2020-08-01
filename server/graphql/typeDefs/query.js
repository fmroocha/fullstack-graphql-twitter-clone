const { gql } = require("apollo-server-express");

const query = gql`
	type Query {
		post(id: ID!): Post!
		posts(authorId: ID!): Post!

		user(id: ID!): User!
		users: [User!]
	}
`;

module.exports = query;
