const postType = require("./types/post.types");
const userType = require("./types/user.types");
const query = require("./query");
const mutation = require("./mutation");

const typeDefs = [query, mutation, postType, userType];

module.exports = typeDefs;
