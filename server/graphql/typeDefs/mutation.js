const { gql } = require("apollo-server-express");

const mutation = gql`
	type Mutation {
		newPost(content: String!, authorId: ID!): Post!
		signUp(name: String!, email: String!, password: String!): User!
	}
`;

module.exports = mutation;
