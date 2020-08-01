const { gql } = require("apollo-server-express");

const userType = gql`
	type User {
		id: ID!
		name: String!
		email: String!
		password: String!
		posts: [Post!]
	}
`;

module.exports = userType;
