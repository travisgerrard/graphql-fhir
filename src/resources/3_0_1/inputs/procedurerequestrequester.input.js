const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ProcedureRequest.requester Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcedureRequestRequester_Input',
	description: 'The individual who initiated the request and has responsibility for its activation.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		agent: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The device, practitioner or organization who initiated the request.'
		},
		onBehalfOf: {
			type: require('./reference.input'),
			description: 'The organization the device or practitioner was acting on behalf of.'
		}
	})
});
