const postResolvers = require("./post.resolvers");
const userResolvers = require("./user.resolvers");

const resolvers = [postResolvers, userResolvers];

module.exports = resolvers;
